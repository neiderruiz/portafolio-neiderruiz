import React, { FC } from 'react';
import Container from '../containers/Container';
import HeroHome from '../heros/HeroHome';
import TitleSection from '../titles/TitleSection';
import Akunaipa from '../../assets/images/akunaipa-web.png';
import LandingPageOne from '../../assets/images/landing-page-one.png';
import Card from '../cards/Card';


const projects = [
    {
        title: 'Akunaipa',
        description: 'A web application for the Akunaipa project, a non-profit organization that provides education and health services to the people of the country.',
        image: Akunaipa,
        link: 'https://akunaipa.com.co/',
        linkText: 'Visit the website',
    },
    {
        title: 'LandingPage',
        description: 'A web application for the Akunaipa project, a non-profit organization that provides education and health services to the people of the country.',
        image: LandingPageOne,
        link: 'https://neiderruiz.github.io/landing-page/',
        linkText: 'Visit the website',
    },
];

const Home: FC = () => {
    return (
        <Container>
            <HeroHome />
            <TitleSection text="Projects" />
            <div className="space-y-14">
                {
                    projects.map((project, index) => (
                        <Card {...project} key={index} />
                    ))
                }
            </div>
        </Container>
    );
};

export default Home;