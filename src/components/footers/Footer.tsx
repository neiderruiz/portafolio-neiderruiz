import React from 'react';
import IconSocial from '../icons/IconSocial';
import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTelegram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
const socials = [
    {
        icon: faFacebook,
        link: 'https://www.facebook.com/neiderruizz/',
    },
    {
        icon: faTiktok,
        link: 'https://www.tiktok.com/@neiderruiz_',
    },
    {
        icon: faTelegram,
        link: 'https://t.me/neiderruiz',
    },
    {
        icon: faGithub,
        link: 'https://github.com/neiderruiz',
    },
    {
        icon: faYoutube,
        link: 'https://www.youtube.com/channel/UCo44eEtlEssCZAdAbnxeqFQ',
    },
    {
        icon: faInstagram,
        link: 'https://www.instagram.com/neiderruiz_/',
    },
    {
        icon: faLinkedinIn,
        link: 'https://www.linkedin.com/in/neiderruiz',
    },
];

const Footer = () => {
    return (
        <footer className="mt-20 space-y-5 py-10 ">
        <div className="flex justify-between lg:w-2/12 w-2/3 mx-auto text-purple-800">
            {
                socials.map((social, index) => (
                    <IconSocial key={index} icon={social.icon} link={social.link} />
                ))
            }
        </div>
        <div className="text-center">&copy; Neider Ruiz {new Date().getFullYear()}</div>
    </footer>
    );
};

export default Footer;