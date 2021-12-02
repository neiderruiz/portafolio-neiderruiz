import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
    text: string;
    to?: string;
    type?: string;
    external?: boolean;
};
const Button: FC<Props> = ({ text, to, type, external }) => {
    let typeButton: string;
    switch (type) {
        case 'secondary':
            typeButton = 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-white py-2 px-4 border-2';
            break;
        default:
            typeButton = 'bg-purple-600 hover:bg-purple-700 text-white';
            break;
    }

    return (
        <div>
        {
            external ?
            <a href={to} target="_blank" rel="noreferrer" className={`${typeButton} button py-3 px-6 rounded-lg font-bold transition delay-150 duration-300 ease-in-out`}>{text}</a>
            :
            <NavLink target="_blank" rel="noopener noreferrer" to={to || '/'} className={`${typeButton} button py-3 px-6 rounded-lg font-bold transition delay-150 duration-300 ease-in-out`}>
                {text}
            </NavLink>
            }
        </div>
    );
};

export default Button;