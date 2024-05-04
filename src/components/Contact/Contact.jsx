import './Contact.scss';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

const Contact = () => {
    // Dark Mode Handler
    const [{ isDark, theme }] = useContext(DarkModeContext);

    // Contact handle
    const handleContactClick = () => {
        window.location.href = 'mailto:gonzalezferradafrancisco@gamil.com';
    };

    return (
        <div className='contact-container' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
            <p className={isDark ? '' : 'paragraph-light'}>Now I'm currently open to new opportunities so my inbox is open. Whether you want to get in touch for professional issues or just want to say hello, you're welcome!</p>
            <br />
            <button className={isDark ? 'contact-button' : 'contact-button--light'} onClick={handleContactClick}>Contact</button>
        </div>
    );
}

export default Contact;