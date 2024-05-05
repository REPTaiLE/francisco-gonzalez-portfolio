import './Contact.scss';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    // Dark Mode Handler
    const [{ isDark, theme }] = useContext(DarkModeContext);

    // Language Handler
    const { t } = useTranslation();

    // Contact handle
    const handleContactClick = () => {
        window.location.href = 'mailto:gonzalezferradafrancisco@gamil.com';
    };

    return (
        <div className='contact-container' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
            <p className={isDark ? '' : 'paragraph-light'}>{t('homepage.contact-section.paragraph')}</p>
            <br />
            <button className={isDark ? 'contact-button' : 'contact-button--light'} onClick={handleContactClick}>{t('homepage.contact-section.button')}</button>
        </div>
    );
}

export default Contact;