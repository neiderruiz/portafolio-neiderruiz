import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconSocial = ({ icon, link }: { icon: any, link: string }) => (
    <a href={link} className="text-lg" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} />
    </a>
);

export default IconSocial;