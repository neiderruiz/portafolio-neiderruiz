import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const items = [
    {
        name: 'Inicio',
        path: '/',
        exact: true
    },
    {
        name: 'Blog',
        path: 'https://neiderruiz.com',
        exact: true,
        external: true
    },
];

const Nav = () => {
    const [state, setState] = useState<number>();
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useEffect(() => {
        window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
        window.addEventListener('scroll', () => {
            window.scrollY > 0 ? setState(window.scrollY) : setState(0);
            window.innerWidth > 800 ? setIsMobile(false) : setIsMobile(true);
        }
        );
    }, []);

    return (
        <>
            <div className={`
            ${state ? ' shadow-lg transition delay-50 duration-50 ease-in-out gradient-primary z-50' : null} 
            ${isMobile ? 'bg-gradient-to-l gradient-primary' : null } 
            flex flex-wrap fixed lg:justify-between lg:px-40 px-5 py-2  lg:bg-transparent w-full lg:h-20 items-center text-white `}>
                <NavLink to="/" className="w-5/6">
                    <h1 className={`lg:text-3xl  text-2xl font-bold ${state ? 'lg:text-white' : `${isMobile ? 'text-white' : 'gradient-text-primary'}`}`} >
                        Neider Ruiz
                    </h1>
                </NavLink>
                <div className="w-1/6 lg:hidden text-right ">
                    <button role="navigation" onClick={() => setIsOpen(!isOpen)}>
                        <FontAwesomeIcon icon={faBars} className={`${isMobile ? 'lg:hidden' : 'lg:block'} text-2xl w-full`} />
                    </button>
                </div>
                <div className="w-1/6 px-10 lg:flex justify-between font-bold lg:show hidden">
                    {items.map((item, index) => 
                            item?.external ?
                                <a href={item.path} key={index} className="text-white">{item.name}</a> :
                                <NavLink key={index} className="text-white capitalize" to={item.path}>{item.name}</NavLink> 
                    )}
                </div>
                {
                    isOpen ?
                        <div className="w-full font-bold space-y-5 mt-5">
                            {items.map((item, index) => (
                                <div key={index}>
                                    <NavLink className="text-white capitalize w-full" to={item.path}>{item.name}</NavLink>
                                </div>
                            )
                            )}
                        </div> : null
                }
            </div>
        </>
    );
};

export default Nav;