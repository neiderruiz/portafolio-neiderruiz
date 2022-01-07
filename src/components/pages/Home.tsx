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

type Skill = {
    id: number;
    name: string;
    image: string;
    description: string;
};
const Home: FC = () => {
    const [projects, setProjects] = React.useState<PropsProject[]>([]);
    const [isOpen, setIsOpen] = React.useState<number | boolean>(false);
    const [skills, setSkills] = React.useState<Skill[] | []>([]);
    const [modal, setModal] = React.useState({
        name: '',
        description: '',
        image: '',
        onClose: () => { },
    });

    useEffect(() => {
        get('pages?limit=4').then(res => {
            if (res?.content) {
                setProjects(res.content);
            }
        });

        get('skills').then(res => {
            console.log(res.content);
            if (res?.content) {
                setSkills(res.content);
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
            <TitleSection text="Habilidades" />
            <div className="flex">

                <div className="grid lg:grid-cols-5 grid-cols-3 py-14 gap-5 lg:w-8/12 mx-auto ">
                    {
                        skills?.map((item) => (
                            <div className="transform transition ease-in-out duration-500 hover:scale-110 cursor-pointer hover:-rotate-12 shadow-xl hover:shadow-2xl">
                                <img src={item.image} className="mx-auto" alt="" />
                                <div className="text-center w-full">
                                    <h2 className="mx-auto text-center font-bold">{item.name}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <TitleSection text="Proyectos" />
            {
                isOpen && <ModalMorePage {...modal} onClose={() => setIsOpen(false)} />
            }
            <div className="space-y-14" id="projects">
                {
                    projects.map((project, index) => (
                        <Card  {...project} index={index} key={project.id} openModal={() => openModal(project?.id)} />
                    ))
                }
            </div>
            <TitleSection text="Informaciòn de contacto" />
            <div className="lg:flex lg:justify-center content-center cursor-pointer lg:space-x-5  lg:space-y-0 space-y-8 lg:px-40">
                {
                    informationContact.map((information, index) => (
                        <CardContact key={index}  {...information} />
                    ))
                }
            </div>
        </Container>
    );
};

export default Home;