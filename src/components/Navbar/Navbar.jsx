import './Navbar.scss';
import ToggleButton from './sub-components/ToggleButton/ToggleButton';
import Language from './sub-components/Language/Language';
import { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


const Navbar = () => {

    // Dark Mode Handler
    const [{theme, isDark}, toggleTheme] = useContext(DarkModeContext);

    // Language Handler
    const { t } = useTranslation();

    // Smooth Scrolling
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    // CV Download Handler
    const cvUrl = `/Francisco_González_CV_${t('navbar.link')}.pdf`;

    // Smooth scroll to section
    const scrollToSection = (event, sectionId) => {
        event.preventDefault(); // Prevent default anchor tag behavior
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <nav className={`navbar ${visible ? 'active' : 'hidden'}`} style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
            <motion.h2
                className={isDark ? 'navbar__logo' : 'navbar__logo--light'}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                F G
            </motion.h2>
            <ul className='navbar__list'>
                <li className={isDark ? 'navbar__item' : 'navbar__item--light'}>
                    <a href='#' onClick={(e) => scrollToSection(e, 'about')}>{t('navbar.about-button')}</a>
                </li>
                <li className={isDark ? 'navbar__item' : 'navbar__item--light'}>
                    <a href='#' onClick={(e) => scrollToSection(e, 'projects')}>{t('navbar.projects-button')}</a>
                </li>
                <li className={isDark ? 'navbar__item' : 'navbar__item--light'}>
                    <a href='#' onClick={(e) => scrollToSection(e, 'contact')}>{t('navbar.contact-button')}</a>
                </li>
                <li className={isDark ? 'navbar__item--darkmode' : 'navbar__item--light'}>
                    <ToggleButton onClick={toggleTheme}/>
                </li>
                <li className={isDark ? 'navbar__item--darkmode' : 'navbar__item--light'}>
                    <Language />
                </li>
                <li className={isDark ? 'navbar__item' : 'navbar__item--light'}>
                    <a href={cvUrl} target="_blank">
                        <motion.button 
                            className={isDark ? 'navbar__item--button' : 'navbar__item--buttonLight'}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            {t('navbar.resume')}
                        </motion.button>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
