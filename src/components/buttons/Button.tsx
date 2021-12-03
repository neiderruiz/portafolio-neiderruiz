import { FC } from "react";

type Props = {
    text: string;
    onClick?: () => void;
    type?: string;
    external?: boolean;
};
const Button: FC<Props> = ({ text, onClick, type, external }) => {
    let typeButton: string;
    switch (type) {
        case 'secondary':
            typeButton = 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-white py-2  border-2 ';
            break;
        default:
            typeButton = 'gradient-primary-button hover:gradient-primary-button  text-white py-2';
            break;
    }

    return (<button onClick={onClick} className={`${typeButton} cursor-pointer px-6 rounded-lg font-bold transition delay-150 duration-300 ease-in-out`}>{text}</button>
    );
};

export default Button;