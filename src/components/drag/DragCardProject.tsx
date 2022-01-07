import { post } from "../../services/api/api";
import ItemCardProject from "./ItemDragCardProject";

const DragCardProject = () => {

    const like = async (ev: any) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("page-id");
        post('likes', {
            pages_portafolio_id: data.replace('page-', ''),
            qualify: 1
        })

    }

    const dislike = (ev: any) => {
        var data = ev.dataTransfer.getData("page-id");
        post('likes', {
            pages_portafolio_id: data.replace('page-', ''),
            qualify: 0
        })
    }
    
    return (
        <>
            <ItemCardProject handledDrop={dislike} />
            <ItemCardProject handledDrop={like} like />
        </>
    )
}


export default DragCardProject;