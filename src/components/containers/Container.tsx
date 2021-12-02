import React, {FC} from 'react';
import Footer from '../footers/Footer';
import Nav from '../navs/Nav';
type Props = {
    children: React.ReactNode;
};


const Container: FC<Props> = ({children}) => {
    return (
        <div className="bg-background">
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

export default Container;