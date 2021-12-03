import { FC, useEffect } from "react";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleModal from "../titles/TitleModal";

type PropsModal = {
    name: string;
    description: string;
    image: string;
    onClose: () => void;
}
const ModalMorePage: FC<PropsModal> = ({ name, description, onClose, image }) => {

    useEffect(() => {
        document.body.addEventListener("keydown", function (event) {
            if (event.code === 'Escape' || event.keyCode === 27) {
                onClose();
            }
        });
    }, [onClose]);

    return (
        <div className="fixed  z-50 w-screen h-screen top-0 flex justify-center ">
            <div className="bg-white h-5/6 m-auto lg:w-11/12 shadow-2xl overflow-scroll">
                <div className="flex lg:px-24 px-5">
                    <TitleModal text={name} />
                    <div className="flex-1 flex justify-end items-center" onClick={onClose}>
                        <button className="bg-gray-100 hover:bg-gray-200 p-5 rounded-lg">
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                    </div>
                </div>
                <div className="lg:px-24 px-5">
                    <div className="lg:w-4/6 mx-auto">
                        <img src={image} alt={name} title={`screenshot - ${name}`} />
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
            </div>
        </div>
    )

}

export default ModalMorePage;