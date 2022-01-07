import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ItemCardProject = ({ handledDrop, like }: { handledDrop?: any, like?: boolean }) => {
    const [isHover, setIsHover] = useState(false);

    const handledCaptureHover = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isHover) {
            setIsHover(true);
            setTimeout(() => {
                setIsHover(false);
            }, like ? 5000 : 1000);
        }

    };

    useEffect(() => {
        if (isHover) {
            console.log('isHover')
        }
        if (!isHover) {
            console.log('!isHover')
        }
    }, [isHover]);



    return (
        <div className={`${like ? 'right-0' : 'left-0'} h-screen top-0 w-1/5 fixed z-40 bg-opacity-40  flex justify-center items-center 
        ${isHover ? ` ` : null} ${like ? 'bg-green-600' : 'bg-red-600'}`}
            onDrop={handledDrop} onDragOverCapture={handledCaptureHover}>
            <div className={`${isHover ? `animate-ping ` : null} ${like ? 'bg-green-600' : 'bg-red-600'} bg-opacity-50 h-48 w-48 text-2xl flex justify-center items-center text-white rounded-full`}>
                {
                    like ? <FontAwesomeIcon icon={faThumbsDown} rotation={180} />
                        :
                        <FontAwesomeIcon icon={faThumbsDown} />
                }
            </div>
        </div>
    )
}

export default ItemCardProject;