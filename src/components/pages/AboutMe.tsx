import { informationAbout } from '../../data/aboutMe';
import Container from '../containers/Container';
import HeroHome from '../heros/HeroHome';

const AboutMe = () => {

    return (
        <Container title="más de mi">
            <HeroHome {...informationAbout} />
        </Container>
    );
};

export default AboutMe;