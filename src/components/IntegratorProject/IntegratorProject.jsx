import './IntegratorProject.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import ToggleButton from '../Navbar/sub-components/ToggleButton/ToggleButton';
import Language from '../Navbar/sub-components/Language/Language';
import CRenca from './sub-components/CRenca';
import Footer from '../Footer/Footer';

const IntegratorProject = () => {
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

    // Load from the top
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

    // CV Download Handler
    const cvUrl = '/Francisco_González_CV_En.pdf';  
      
    return (
        <div className='grid-containerThree' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
            <div className={`header ${visible ? 'active' : 'hidden'}`} style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
                <h2 className={isDark ? 'navbar__logo' : 'navbar__logo--light'} title='Home'><Link to='/'>F G</Link></h2>
                <ul className='navbarTwo__list'>
                    <li className='navbarTwo__item'>
                        <Link to='/projects'>
                            <button className={isDark ? 'navbarTwo__item--button' : 'navbarTwo__item--buttonLight'}>Projects</button>
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
                            <button className={isDark ? 'navbarTwo__item--button': 'navbarTwo__item--buttonLight'}>Resume</button>
                        </a>
                    </li>
                </ul>
            </div>
            <CRenca />
            <Footer />
        </div>
    );
}

export default IntegratorProject;