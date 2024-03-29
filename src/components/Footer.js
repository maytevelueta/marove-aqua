import { FaInstagram, FaGithub } from 'react-icons/fa';

function Footer ({
    Instagram = < FaInstagram />,
    GitHub = <FaGithub />
}) {
    return ( 
        <footer className='footer'>
            <div className='footer-links'>
                <a href='https://www.instagram.com/marove_aqua/' style={{ fontSize: "2em" }}>{Instagram}</a>
            </div>
        </footer>
     );
};
 
export default Footer;