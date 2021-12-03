import { FC } from 'react';
import Button from '../buttons/Button';
import ButtonLink from '../buttons/ButtonLink';

type Props = {
    name: string;
    image: string;
    url: string;
    linkText: string;
    index: number;
    short_description: string;
    tecnologies: string;
    openModal: () => void;
};



const Card: FC<Props> = ({ name, image, url, linkText, index, short_description, tecnologies, openModal }) => {

    return (
        <div className={`   lg:w-8/12 h-auto mx-auto bg-white rounded-2xl shadow-sm flex ${index % 2 ? `lg:flex-row-reverse` : `lg:flex-row`}  flex-wrap-reverse hover:shadow-xl`}>
            <div className="lg:my-auto space-y-5 lg:px-10 px-5 lg:w-3/6 my-10">
                <h3 className="text-2xl gradient-text-primary font-bold">{name}</h3>
                <p className="">{short_description}</p>
               <div className="space-y-7">
               <div>
                    {
                        tecnologies.split(',').map((item, index) =>
                            <span className="inline-block bg-primary-light rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 bg-indigo-200 my-1">{item}</span>
                        )
                    }
                </div>
                <div className="flex justify-start space-x-5">
                    <Button external text="Ver mas.." onClick={openModal} />
                    <ButtonLink external type="secondary" text="Ver web" to={url} />
                </div>
               </div>
            </div>
            <div className="lg:w-3/6 cursor-pointer hover:rounded-lg ">
                <img className="lg:h-82 w-full" src={image} alt={name} title={name} />
            </div>
        </div>
    );
};

export default Card;