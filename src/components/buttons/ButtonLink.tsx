import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
    text: string;
    to?: string;
    type?: string;
    external?: boolean;
    target?: boolean;
};
const ButtonLink: FC<Props> = ({ text, to, type, external, target }) => {
    let typeButton: string;
    switch (type) {
        case 'secondary':
            typeButton = 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white  py-1 border-4 ';
            break;
        default:
            typeButton = 'gradient-primary-button hover:gradient-primary-button  text-white py-2';
            break;
    }

    return (
        <div>{
            external ?
                <a href={to} target={target ? '_blank' : '_self'} rel="noreferrer" >
                    <div className={`${typeButton} px-6 rounded-lg font-bold transition delay-150 duration-300 ease-in-out`}>
                        {text}
                    </div>
                </a>
                :
                <NavLink to={to || '/'} >
                    <span className={`${typeButton} flex px-6 align-middle rounded-lg font-bold transition delay-150 duration-300 ease-in-out `}>
                        {text}
                    </span>
                </NavLink>
        }
        </div>
    );
};

export default ButtonLink;