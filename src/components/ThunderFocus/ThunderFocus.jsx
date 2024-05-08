import './ThunderFocus.scss';
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useTranslation } from 'react-i18next';
import ToggleButton from '../Navbar/sub-components/ToggleButton/ToggleButton';
import Language from '../Navbar/sub-components/Language/Language';
import ThunderTheme from './sub-components/ThunderTheme';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

const ThunderFocus = () => {
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
    }, [prevScrollPos, visible]);

    // Load from the top
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    // CV Download Handler
    const cvUrl = '/Francisco_González_CV_En.pdf';  
      
    return (
        <div className='grid-containerFour' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
            <div className={`header ${visible ? 'active' : 'hidden'}`} style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
                <motion.h2 
                    className={isDark ? 'navbar__logo' : 'navbar__logo--light'} 
                    title='Home'
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Link to='/'>F G</Link>
                </motion.h2>
                <ul className='navbarTwo__list'>
                    <li className='navbarTwo__item'>
                        <Link to='/projects'>
                            <motion.button 
                                className={isDark ? 'navbarTwo__item--button' : 'navbarTwo__item--buttonLight'}
                                whileHover={{ scale: 1.06 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {t('navbar.projects')}
                            </motion.button>
                        </Link>
                    </li>
                    <li className={isDark ? 'navbarTwo__item--darkmode' : 'navbarTwo__item--light'}>
                        <ToggleButton onClick={toggleTheme}/>
                    </li>
                    <li className={isDark ? 'navbarTwo__item--darkmode' : 'navbarTwo__item--light'}>
                        <Language />
                    </li>
                    <li className='navbarTwo__item'>
                        <a href={cvUrl} target="_blank">
                            <motion.button 
                                className={isDark ? 'navbarTwo__item--button': 'navbarTwo__item--buttonLight'}
                                whileHover={{ scale: 1.06 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {t('navbar.resume')}
                            </motion.button>
                        </a>
                    </li>
                </ul>
            </div>
            <ThunderTheme />
            <Footer />
        </div>
    );
}

export default ThunderFocus;