import './MainContent.scss';
import About from '../../../About/About';
import Projects from '../../../Projects/Projects';
import Contact from '../../../Contact/Contact';
import { useContext } from 'react';
import { DarkModeContext } from '../../../../context/DarkModeContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MainContent = () => {
    // Dark Mode Context
    const [{theme, isDark}] = useContext(DarkModeContext);

    // Language Handler
    const { t } = useTranslation();

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

        <main className={isDark ? 'main-content' : 'main-content--light'}  id='section-one'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    ease: "linear",
                    duration: .5,
                    x: { duration: 1.4 }
                }}
            >

                <div className='main-content__main-section'>

                    <div className='main-content__section-one'>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0},
                        }}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: .2, delay: .1}} 
                    >
                        <h4 className={isDark ? '' : 'title-light'}>{t('homepage.main-section.title')}</h4>
                        <h1 className={isDark ? '' : 'name-light'}>{t('homepage.main-section.name')}</h1>
                        <h2 className={isDark ? '' : 'subtitle-light'}>{t('homepage.main-section.subtitle')}</h2>
                        <p className={isDark ? '' : 'paragraph-light'}>{t('homepage.main-section.personal-info')}</p>

                        <div className='main-content__buttons'>

                            <a href='#' onClick={(e) => scrollToSection(e, 'contact')}>
                                <motion.button 
                                    className={isDark ? 'contact-button' : 'contact-button--light'}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {t('homepage.main-section.contact-button')}
                                </motion.button>
                            </a>
                            <a href='#projects' onClick={(e) => scrollToSection(e, 'projects')}>
                                <motion.button 
                                    className={isDark ? 'project-button' : 'project-button--light'}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {t('homepage.main-section.projects-button')}
                                </motion.button>
                            </a>

                        </div>
                    </motion.div>
                    </div>

                    <div className='main-content__section-two'>
                        
                        
                        <a href='https://www.linkedin.com/in/francisco-arnoldo/' title='Go to my LinkedIn' target='_blank'>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <img src='/profile.png' className={isDark ? 'main-content__img' : 'main-content__img--light'} alt='Profile Picture'/>
                            </motion.div>
                        </a>
                

                    </div>
            
                </div>

            </motion.div>
 
            <div className={isDark ? 'main-content__about' : 'main-content__about--light'} id='about'>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    ease: "linear",
                    duration: .5,
                    x: { duration: 1.4 }
                }}
            >
                <h2 style={{color: isDark ? theme.color : theme.color}}><hr style={{color: isDark ? theme.color : theme.color, opacity: isDark ? '.1' : '1'}}/>{t('homepage.main-section.section-titles.about-title')}</h2>
                <About />
            </motion.div>

            </div>

            <div className={isDark ? 'main-content__projects' : 'main-content__projects--light'} id='projects'>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        ease: "linear",
                        duration: .5,
                        x: { duration: 1.4 }
                    }}
                >
                    <h2 style={{color: isDark ? theme.color : theme.color}}><hr style={{color: isDark ? theme.color : theme.color, opacity: isDark ? '.1' : '1'}} />{t('homepage.main-section.section-titles.projects-title')}</h2>
                    <Projects />
                </motion.div>

            </div>

            <div className={isDark ? 'main-content__contact' : 'main-content__contact--light'} id='contact'>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        ease: "linear",
                        duration: .5,
                        x: { duration: 1.4 }
                    }}
                >
                    <h2 style={{color: isDark ? theme.color : theme.color}}>{t('homepage.main-section.section-titles.contact-title')}</h2>
                    <Contact />
                </motion.div>

            </div>

        </main>
    );
}

export default MainContent;

