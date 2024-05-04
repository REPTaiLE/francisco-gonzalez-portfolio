import './Footer.scss';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

const Footer = () => {
    // Dark Mode Context
    const [{theme, isDark}] = useContext(DarkModeContext);

    return (
        <footer className='footer' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>

            <ul className='footer__list'>

                <li className='footer__item'>
                    <a href='https://github.com/REPTaiLE' title='Github' target='_blank' id={isDark ? '' : 'light'}>
                        <i className='fa-brands fa-square-github'></i>
                    </a>
                </li>

                <li className='footer__item'>
                    <a href='https://www.linkedin.com/in/francisco-arnoldo/' title='LinkedIn' target='_blank' id={isDark ? '' : 'light'}> 
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                </li>

            </ul>

            <p id={isDark ? '' : 'paragraph-light'}>Design & Developed By <a href='#' title='Portfolio Repo' id={isDark ? '' : 'author--light'}>Francisco González</a></p>

        </footer>
    );
}

export default Footer;