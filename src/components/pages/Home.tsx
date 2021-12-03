import React, { FC, useEffect } from 'react';
import Container from '../containers/Container';
import HeroHome from '../heros/HeroHome';
import TitleSection from '../titles/TitleSection';
import Card from '../cards/Card';
import { get } from '../../services/api/api';
import ModalMorePage from '../modals/ModalMorePage';
import CardContact from '../cards/CardContact';
import { informationContact, informationHome } from '../../data/aboutMe';

type PropsProject = {
    id: number;
    index: number;
    name: string;
    description: string;
    image: string;
    url: string;
    linkText: string;
    short_description: string;
    tecnologies: string;
    openModal: () => void;
};

const Home: FC = () => {
    const [projects, setProjects] = React.useState<PropsProject[]>([]);
    const [isOpen, setIsOpen] = React.useState<number | boolean>(false);
    const [modal, setModal] = React.useState({
        name: '',
        description: '',
        image: '',
        onClose: () => { },
    });

    useEffect(() => {
        get('pages').then(res => {
            if (res?.content) {
                setProjects(res.content);
            }
        });
    }, []);


    const openModal = (id: number) => {
        const project = projects.find(p => p.id === id);
        if (project) {
            setModal({
                ...project,
                onClose: () => setIsOpen(false),
            });
            setIsOpen(id);
        }
    }

    return (
        <Container>
            <HeroHome {...informationHome} showButtons />
            <TitleSection text="Projectos" />
            {
                isOpen && <ModalMorePage {...modal} onClose={() => setIsOpen(false)} />
            }
            <div className="space-y-14" id="projects">
                {
                    projects.map((project) => (
                        <Card  {...project} key={project.id} openModal={() => openModal(project?.id)} />
                    ))
                }
            </div>
            <TitleSection text="Informaciòn de contacto" />
            <div className="lg:flex lg:justify-center content-center cursor-pointer lg:space-x-5  lg:space-y-0 space-y-8 lg:px-40">
                {
                    informationContact.map((information, index) => (
                        <CardContact key={index} {...information} />
                    ))
                }
            </div>
        </Container>
    );
};

export default Home;