import './Projects.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Project = ({ project }) => {
    // Dark Mode Handler
    const [{ isDark }] = useContext(DarkModeContext);

    return (
        
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Link to={project.link} className={isDark ? 'project-link' : 'project-link--light'}>
                    
                    <img src={project.img} className={isDark ? 'section-projects__img' : 'section-projects__img--light'} alt={project.alt} title={project.title} />
                    
                    <div className={isDark ? 'section-projects__info' : 'section-projects__info--light'}>
                            <h3>{project.name}</h3>
                            <br />
                            <p style={{textAlign: 'justify'}}>
                                {project.description}
                            </p>
                            <br />
                    </div>

            </Link>
        </motion.div>

    );
}

const Projects = () => {
    // Dark Mode Handler
    const [{theme, isDark}] = useContext(DarkModeContext);

    // Language Handler
    const { t } = useTranslation();

    return (
        <div className='section-projects'>

            <h2 style={{color: isDark ? theme.color : theme.color}}>{t('homepage.projects-section.title')}</h2>

            <div className={isDark ? 'section-project__container' : 'section-projecct__container--light'}>

                {/* Rendering Project component with props */}
                <Project 
                    project={{
                        link: '/integrator-project',
                        alt: t('homepage.projects-section.integrator-project.alt'),
                        title: t('homepage.projects-section.integrator-project.title-att'),
                        name: 'C-Renca',
                        img: '/C-Renca-landingPage.png',
                        description: t('homepage.projects-section.integrator-project.description')
                    }}
                />

                <Project 
                    project={{
                        link: '/thunder-focus-theme',
                        alt: t('homepage.projects-section.thunder-focus.alt'),
                        title: t('homepage.projects-section.thunder-focus.title-att'),
                        name: 'Thunder Focus Theme',
                        img: '/theme-image.png',
                        description: t('homepage.projects-section.thunder-focus.description')
                    }}
                />

            </div>

            <motion.div
                whileHover={{ scale: 1.07 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <Link to='/projects#logo'><button className={isDark ? 'button-projects' : 'button-projects--light'}>{t('homepage.projects-section.section-button')}</button></Link>
            </motion.div>

        </div>
    );
}

export default Projects;