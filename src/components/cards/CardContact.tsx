import { FC } from "react";

type Props = {
    title: string;
    description: string;
}
const CardContact: FC<Props> = ({ title, description }) => {
    return (
        <div className="bg-white rounded-xl lg:w-1/3 shadow-md lg:h-48 h-32 lg:mx-0 mx-auto flex w-2/3">
            <div className="m-auto space-y-5">
                <h4 className="gradient-text-primary text-center">
                    {title}
                </h4>
                <p className="text-center">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default CardContact;