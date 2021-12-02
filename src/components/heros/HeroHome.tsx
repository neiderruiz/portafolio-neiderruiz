import Image from '../../assets/images/hero-neider.png';
import ImageMobile from '../../assets/images/hero-mobile.png';
import Button from '../buttons/Button';

const HeroHome = () => {
    return (
        <div className="lg:grid lg:grid-cols-3 lg:h-screen lg:pl-40 flex flex-wrap-reverse">
            <div className="lg:col-span-1 lg:space-y-10 space-y-10 lg:my-auto lg:mx-0 mt-10 mx-3">
                <h3 className="text-purple-600 lg:text-3xl lg:text-left text-center">Desarrollador web</h3>
                <h2 className="font-bold lg:text-5xl text-3xl">Hola,  Mi nombre es Neider Ruiz</h2>
                <p className="text-gray-800 text-2xl">
                    Soy un apasionado por la programación, con muchas ganas de mejorar y aprender día tras día con el objetivo de aportar valor a mi equipo de trabajo, ser mejor persona y ser mejor en mi profesión.
                </p>
                <div className="space-x-4 lg:text-left flex lg:justify-start justify-center">
                        <Button text="Projectos" to="#" />                    
                        <Button text="LinkedIn" to="https://www.linkedin.com/in/neiderruiz" type="secondary" external />
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-end lg:mt-0 mt-5">
                <img srcSet={`${ImageMobile} 320w,
             ${ImageMobile} 480w,
             ${Image} 900w`}
                    sizes="(max-width: 480px) 480px, (max-width: 900px) 900px, 900px"
                    src={Image}
                    alt="hero neider" />
            </div>
        </div>
    );
};

export default HeroHome;