import { FC } from 'react';
import Image from '../../assets/images/hero-neider.png';
import ImageMobile from '../../assets/images/hero-mobile.png';
import ButtonLink from '../buttons/ButtonLink';

type Props = {
    title: string,
    subtitle: string,
    description: string,
    showButtons?: boolean,
}

const HeroHome: FC<Props> = ({ title, subtitle, description, showButtons }) => {

    return (
        <div className="lg:grid lg:grid-cols-3 lg:h-screen lg:pl-40 flex flex-wrap-reverse">
            <div className="lg:col-span-1 lg:space-y-10 space-y-10 lg:my-auto lg:mx-0 mt-10 mx-3">
                <h3 className="lg:text-3xl lg:text-left text-center gradient-text-primary">{subtitle}</h3>
                <h2 className="font-bold lg:text-5xl text-3xl ">{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: description }} className="space-y-4"></div>
                {
                    showButtons && <div className="space-x-4 lg:text-left flex lg:justify-start justify-center">
                        <ButtonLink text="Projectos" external to="#projects" />
                        <ButtonLink text="Saber más" to="/about-me" type="secondary" />
                    </div>
                }
            </div>
            <div className="lg:col-span-2 flex justify-end lg:mt-0 mt-5">
                <img srcSet={`${ImageMobile} 320w,
             ${ImageMobile} 480w,
             ${Image} 900w`}
                    sizes="(max-width: 480px) 480px, (min-width: 900px) 900px, 900px"
                    src={Image}
                    alt="hero neider"
                />
            </div>
        </div>
    );
};

export default HeroHome;