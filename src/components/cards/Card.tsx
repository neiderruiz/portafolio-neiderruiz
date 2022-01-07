import { FC,  useState } from 'react';
import Button from '../buttons/Button';
import ButtonLink from '../buttons/ButtonLink';
import DragCardProject from '../drag/DragCardProject';

type Props = {
    id: number;
    name: string;
    image: string;
    url: string;
    linkText: string;
    index: number;
    short_description: string;
    tecnologies: string;
    openModal: () => void;
};

const Card: FC<Props> = ({ name, image, url, linkText, index, short_description, tecnologies, openModal, id }) => {
    const [drag, setDrag] = useState(false);
    const [qualify, setQualify] = useState(false);
    const [showQualify, setShowQualify] = useState(false);
    const reverse = index % 2;

    const handledrag = (e: any) => {
        e.dataTransfer.setData("page-id", e.target.id);
        setDrag(true);
    }

    const handleDrop = (e: any) => {
        console.log('drop finish')
        setTimeout(() => {
            setDrag(false);
        }, 500);
    }

    const hoverQualify = () => {
        if (showQualify) return;
        setQualify(true);
        setShowQualify(true);
    }

    return (
        <>
            {
                drag && <DragCardProject />
            }

            <div className={`transform ${drag ? 'lg:w-4/12' : 'lg:w-8/12'}  h-auto mx-auto bg-white rounded-2xl shadow-blue-900 shadow-lg flex ${ reverse ? `lg:flex-row-reverse hover:-rotate-2` : `lg:flex-row hover:rotate-2`}  flex-wrap-reverse hover:shadow-xl  hover:ease-in-out duration-700`}>
                <div className="lg:my-auto relative space-y-5 lg:px-10 px-5 lg:w-3/6 my-10">
                    <h3 className="text-2xl gradient-text-primary font-bold">{name}</h3>
                    <p className="">{short_description}</p>
                    <div className="space-y-7">
                        <div>
                            {
                                tecnologies.split(',').map((item, index) =>
                                    <span key={index} className="inline-block bg-primary-light rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 bg-indigo-200 my-1">{item}</span>
                                )
                            }
                        </div>
                        <div className={`justify-start space-x-5 ${drag ? 'hidden' : 'flex'}`}>
                            <Button external text="Ver mas.." onClick={openModal} />
                            <ButtonLink external type="secondary" text="Ver web" to={url} />
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/6 cursor-pointer relative hover:rounded-lg " onMouseEnter={hoverQualify} onMouseLeave={() => setQualify(false)}>
                    {qualify && <div
                        className={`absolute ${drag ? `-rotate-6 p-10 gradient-primary -top-2/3 ${reverse ? '-right-5': '-left-1/3' }` : '-rotate-12 bg-indigo-600'}  h-25 transform  ease-in-out duration-700 rounded-sm    text-white shadow-lg p-5`}
                    >
                        {
                            drag ? '¡Gracias!' : 'Arrastrame!!'
                        }
                        </div>}
                    <img className="lg:h-82 w-full" src={image} alt={name} draggable onDragStart={handledrag} onDragEnd={handleDrop} id={`page-${id}`} title={name} />
                </div>
            </div>
        </>
    );
};

export default Card;