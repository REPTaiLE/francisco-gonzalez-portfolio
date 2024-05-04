import './Projects.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

const Project = ({ project }) => {
    // Dark Mode Handler
    const [{ isDark }] = useContext(DarkModeContext);

    return (
        
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

    );
}

const Projects = () => {
    // Dark Mode Handler
    const [{theme, isDark}, toggleTheme] = useContext(DarkModeContext);

    return (
        <div className='section-projects'>

            <h2 style={{color: isDark ? theme.color : theme.color}}>Here are some projects I built</h2>

            <div className={isDark ? 'section-project__container' : 'section-projecct__container--light'}>

                {/* Rendering Project component with props */}
                <Project 
                    project={{
                        link: '/integrator-project',
                        alt: 'Integrator Project Picture',
                        title: 'Integrator Project',
                        name: 'C-Renca',
                        img: '/C-Renca-landingPage.png',
                        description: 'C-Renca is an e-learning platform developed with the MERN stack for the municipality of Renca. This is consider the first real project I participated in.'
                    }}
                />

                <Project 
                    project={{
                        link: '/thunder-focus-theme',
                        alt: 'Thunder Focus Theme Picture',
                        title: 'Thunder Focus Theme',
                        name: 'Thunder Focus Theme',
                        img: '/theme-image.png',
                        description: 'Thunder Focus is a theme created with yo-code and Theme Studio for VS Code. It is my first Theme I\'ve created for VSC.'
                    }}
                />

            </div>

            <Link to='/projects#logo'><button className={isDark ? 'button-projects' : 'button-projects--light'}>See More!</button></Link>

        </div>
    );
}

export default Projects;