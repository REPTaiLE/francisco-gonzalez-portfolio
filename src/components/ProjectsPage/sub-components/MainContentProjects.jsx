import './MainContentProjects.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/DarkModeContext';

const Project = ({ project }) => {
    // Light Mode Handler
    const [{ isDark }] = useContext(DarkModeContext);

    return (
        
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

    );
}

const MainContentProjects = () => {
    // Light Mode Handler
    const [{ isDark, theme }] = useContext(DarkModeContext);

    return (

        <div className='main-content-projects' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>

            <h1 className='main-content-projects__title'>Projects</h1>

            <div className='main-content-projects__container'>
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

        </div>

    );
}

export default MainContentProjects;