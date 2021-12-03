import { useEffect } from "react";

const useTitle = (title: string) => {
    useEffect(() => {
        document.title = `${title} | Neider Ruiz`;
    }, [title]);
};
export default useTitle;