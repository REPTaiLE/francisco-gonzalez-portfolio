import './Navbar.scss';
import ToggleButton from './sub-components/ToggleButton/ToggleButton';
import Language from './sub-components/Language/Language';
import { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

const Navbar = () => {
    // Dark Mode Handler
    const [{theme, isDark}, toggleTheme] = useContext(DarkModeContext);

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

    // CV Download Handler
    const cvUrl = '/Francisco_González_CV_En.pdf';

    return (
        <nav className={`navbar ${visible ? 'active' : 'hidden'}`} style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
            <h2 className={isDark ? 'navbar__logo' : 'navbar__logo--light'}>F G</h2>
            <ul className='navbar__list'>
                <li className={isDark ? 'navbar__item' : 'navbar__item--light'} id="about-button">
                    <a href='#about'>About</a>
                </li>
                <li className={isDark ? 'navbar__item' : 'navbar__item--light'} id="projects-button">
                    <a href='#projects'>Projects</a>
                </li>
                <li className={isDark ? 'navbar__item' : 'navbar__item--light'} id="contact-button">
                    <a href='#contact'>Contact</a>
                </li>
                <li className={isDark ? 'navbar__item--darkmode' : 'navbar__item--light'}>
                    <ToggleButton onClick={toggleTheme}/>
                </li>
                <li className={isDark ? 'navbar__item--darkmode' : 'navbar__item--light'}>
                    <Language />
                </li>
                <li className={isDark ? 'navbar__item' : 'navbar__item--light'}>
                    <a href={cvUrl} target="_blank">
                        <button className={isDark ? 'navbar__item--button' : 'navbar__item--buttonLight'}>Resume</button>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
