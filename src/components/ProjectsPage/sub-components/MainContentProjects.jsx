import './MainContentProjects.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/DarkModeContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Project = ({ project }) => {
    // Light Mode Handler
    const [{ isDark }] = useContext(DarkModeContext);

    return (
        
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >

            <Link to={project.link} className={isDark ? 'project-link' : 'project-link--light'}>
                    
                    <img src={project.img} className='main-content-projects__img' alt={project.alt} title={project.title} />
                    
                    <div className='main-content-projects__info'>
                            <h3>{project.name}</h3>
                            <br />
                            <p>
                                {project.description}
                            </p>
                            <br />
                    </div>

            </Link>

        </motion.div>

    );
}

const MainContentProjects = () => {
    // Light Mode Handler
    const [{ isDark, theme }] = useContext(DarkModeContext);

    // Language Handler
    const { t } = useTranslation();

    return (

        <motion.div
            className='main-content-projects' 
            style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                ease: "linear",
                duration: .5,
                x: { duration: 1.4 }
            }}
        >

            <h1 className='main-content-projects__title'>{t('projects-page.title')}</h1>

            <div className='main-content-projects__container'>
                {/* Rendering Project component with props */}
                <Project 
                    project={{
                        link: '/integrator-project',
                        alt: t('homepage.projects-section.integrator-project.alt'),
                        title: t('homepage.projects-section.integrator-project.title-att'),
                        name: t('homepage.projects-section.integrator-project.title'),
                        img: '/C-Renca-landingPage.png',
                        description: t('homepage.projects-section.integrator-project.description')
                    }}
                />

                <Project 
                    project={{
                        link: '/thunder-focus-theme',
                        alt: t('homepage.projects-section.thunder-focus.alt'),
                        title: t('homepage.projects-section.thunder-focus.title-att'),
                        name: t('homepage.projects-section.thunder-focus.title'),
                        img: '/theme-image.png',
                        description: t('homepage.projects-section.thunder-focus.description')
                    }}
                />

            </div>

        </motion.div>

    );
}

export default MainContentProjects;