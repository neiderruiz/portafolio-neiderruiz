import React, {FC} from 'react';
import useTitle from '../../hooks/useTitle';
import Footer from '../footers/Footer';
import Nav from '../navs/Nav';
type Props = {
    children: React.ReactNode;
    title?: string;
};


const Container: FC<Props> = ({children, title}) => {
    useTitle(title || 'Portafolio');
    return (
        <div className="bg-background">
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

export default Container;