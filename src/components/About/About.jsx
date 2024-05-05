import './About.scss';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useTranslation } from 'react-i18next';

const About = () => {
    // Dark Mode Context
    const [{theme, isDark}] = useContext(DarkModeContext);

    // Language Handler
    const { t } = useTranslation();

    // CV Download Handler
    const cvUrl = 'Certificado_Generation.pdf';
    
    return (
        <div className='section-about'>

            <div className='section-about__one'> 
                <p style={{textAlign: 'justify'}} className={isDark ? '' : 'paragraph--light'}>{t('homepage.about-section.paragraph.one')}</p>
                <br />
                <p style={{textAlign: 'justify'}} className={isDark ? '' : 'paragraph--light'}>{t('homepage.about-section.paragraph.two')}</p>
                <br />
                <p style={{textAlign: 'justify'}} className={isDark ? '' : 'paragraph--light'}>{t('homepage.about-section.paragraph.three')}</p>    
                <br />
                <p style={{textAlign: 'justify'}} className={isDark ? '' : 'paragraph--light'}>{t('homepage.about-section.paragraph.four')}</p>
                <br />
                <p style={{textAlign: 'justify'}} className={isDark ? '' : 'paragraph--light'}>{t('homepage.about-section.paragraph.five.a')} <a href={cvUrl} target="_blank" className={isDark ? '' : 'anchor--light'}>{t('homepage.about-section.paragraph.five.d')}</a> {t('homepage.about-section.paragraph.five.b')} <a href='https://chile.generation.org' target='_blank' className={isDark ? '' : 'anchor--light'}>Generation Chile</a> {t('homepage.about-section.paragraph.five.c')}</p>
            </div>

            <div className='section-about__two'>

                <div className='section-about__img--container'>
                    <img src='/profileTwo.png' className={isDark ? 'section-about__img' : 'section-about__img--light'} alt='Profile Picture' />
                </div>

                <legend className='section-about__label' style={{color: isDark ? theme.color : theme.color}}>
                    {t('homepage.about-section.stack-label')}

                    <ul className='section-about__techList'>
                        <li className='list-item'><span className={isDark ? '' : 'span-light'}>JavaScript (ES6+)</span></li>
                        <li className='list-item'><span className={isDark ? '' : 'span-light'}>React</span></li>
                        <li className='list-item'><span className={isDark ? '' : 'span-light'}>Node.js</span></li>
                        <li className='list-item'><span className={isDark ? '' : 'span-light'}>MongoDB</span></li>
                        <li className='list-item'><span className={isDark ? '' : 'span-light'}>Express</span></li>
                        <li className='list-item'><span className={isDark ? '' : 'span-light'}>Sass</span></li>
                    </ul>

                </legend>

            </div>

        </div>
    );
}

export default About;