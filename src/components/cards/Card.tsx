import React, { FC } from 'react';
import Button from '../buttons/Button';

type Props = {
    title: string;
    description: string;
    image: string;
    link: string;
    linkText: string;
};

const Card: FC<Props> = ({title, description, image, link, linkText}) => {
    return (
        <div className="lg:w-8/12 h-auto mx-auto lg:grid lg:grid-cols-2 bg-white rounded-2xl shadow-sm flex flex-wrap-reverse">
            <div className="my-auto space-y-5 px-10">                
                    <h3 className="text-2xl text-purple-600 font-bold">{title}</h3>
                    <p className="">{description}</p>
                    <div>
                    <Button external type="secondary" text="Ver web" to={link} />
                    </div>
            </div>
            <div>
                <img className="lg:h-72 w-full" src={image} alt="lo" />
            </div>
        </div>
    );
};

export default Card;