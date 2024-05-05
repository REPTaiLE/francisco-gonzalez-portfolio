import './CRenca.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/DarkModeContext';
import { useTranslation } from 'react-i18next';

const CRenca = () => {
    // Light Mode Handler
    const [{ isDark, theme }] = useContext(DarkModeContext);

    // Language Handler
    const { t } = useTranslation();

    return (
        <div className='main-content-integrator' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
            <div className='main-content-integrator__title'>
                <h1>C-Renca</h1>
                <h3 style={{color: isDark ? theme.color : theme.color}}>{t('c-renca.subtitle')}</h3>
            </div>
            <div className='main-content-integrator__image-container'>
                <article className='project-image'>
                    <img src='/C-Renca-landingPage.png' alt='Landing Page Illustration' />
                </article>
                <article className='project-image'>
                    <img src='/Admin-landingPage.png' />
                </article>
                <article className='project-image'>
                    <img src='/login-user.png' />
                </article>
                <article className='project-image'>
                    <img src='/C-Renca-landingPage-darkmode.png' />
                </article>
                <article className='project-image'>
                    <img src='/Admin-landingPage-darkmode.png' />
                </article>
                <article className='project-image'>
                    <img src='/login-admin.jpeg' />
                </article>
            </div>
            <div className='main-content-integrator__info' style={{backgroundColor: isDark ? theme.backgroundColor: theme.backgroundColor}}>

                <p style={{color: isDark ? theme.color : theme.color}}>
                {t('c-renca.paragraph.one')}
                <br />
                {t('c-renca.paragraph.two')}
                <br />
                {t('c-renca.paragraph.three')}
                <br />
                {t('c-renca.paragraph.four')}
                </p>

                <div className='icon-container-github' title='Project Repository'>
                    <a href='https://github.com/REPTaiLE/Thunder-Focus' className='link-two' target='_blank'>
                        <img src='/github-icon.png' alt='vsc-icon' />
                        <h4>{t('c-renca.github-text')}</h4>
                    </a>
                </div>

                <div className='stack-container'>
                    <h2 style={{color: isDark ? theme.color : theme.color}}>{t('c-renca.stack-text')}</h2>
                    <div className='stack'>
                        <article className='tech'><img src='/mongodb-icon.png' id='left' title='MongoDB' /></article>
                        <article className='tech'><img src='/express-icon.png' id='right' title='Express JS' /></article>
                        <article className='tech'><img src='/react-icon.png' id='left' title='React' /></article>
                        <article className='tech'><img src='/nodejs-icon.png' id='right' title='NodeJS' /></article>
                    </div>
                </div>

                <div className='palette-container'>
                    <h2>{t('c-renca.palette')} <FontAwesomeIcon icon={faPalette} /></h2>
                    <br />
                    <div className='palette'>
                        <div className='palette-one'>
                            <h5>#D75E24</h5>
                        </div>
                        <div className='palette-two'>
                            <h5>#E68E0C</h5>
                        </div>
                        <div className='palette-three'>
                            <h5>#769E33</h5>
                        </div>
                        <div className='palette-four'>
                            <h5>#009A88</h5>
                        </div>
                        <div className='palette-five'>
                            <h5>#5FB9D3</h5>
                        </div>
                        <div className='palette-six'>
                            <h5>#0192D0</h5>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default CRenca;