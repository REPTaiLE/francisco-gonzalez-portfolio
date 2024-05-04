import './CRenca.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/DarkModeContext';

const CRenca = () => {
    // Light Mode Handler
    const [{ isDark, theme }] = useContext(DarkModeContext);

    return (
        <div className='main-content-integrator' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
            <div className='main-content-integrator__title'>
                <h1>C-Renca</h1>
                <h3 style={{color: isDark ? theme.color : theme.color}}>An online course platform design with the MERN Stack</h3>
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
                This is considered to be my first serious or real project for the Municipality of Renca while I was studying on Generation Chile. 
                C-Renca is thinked of a project for decreasing the gap between people with formal studies and those who didn't had the chance to attend to college.
                <br />
                However, anyone who lives in Renca will have access to the academic resources available in the website.
                <br />
                At first, we designed the graphic interfaces prototypes on Figma and then migrated the layout into vainilla HTML and CSS with a little bit of JS for small functionalities that approached to a beta version to be presented and everything acording with the graphic guidelines requested by the client.    
                <br />
                Once presented the first MVP and accepted by the client we preceded to migrate the vainilla project into React. This was a difficult process because we were learning new technologies and tecniques while applying them in the project.
                We built C-Renca with the MERN Stack basically and also other technologies like: Scss, Bootstrap, React-Bootstrap, Mongoose, Dotenv, Bcrypt, Jsonwebtoken and Cloudinary. 
                </p>

                <div className='icon-container-github' title='Project Repository'>
                    <a href='https://github.com/REPTaiLE/Thunder-Focus' className='link-two' target='_blank'>
                        <img src='/github-icon.png' alt='vsc-icon' />
                        <h4>Project Repository</h4>
                    </a>
                </div>

                <div className='stack-container'>
                    <h2 style={{color: isDark ? theme.color : theme.color}}>Technologies used in this project</h2>
                    <div className='stack'>
                        <article className='tech'><img src='/mongodb-icon.png' id='left' title='MongoDB' /></article>
                        <article className='tech'><img src='/express-icon.png' id='right' title='Express JS' /></article>
                        <article className='tech'><img src='/react-icon.png' id='left' title='React' /></article>
                        <article className='tech'><img src='/nodejs-icon.png' id='right' title='NodeJS' /></article>
                    </div>
                </div>

                <div className='palette-container'>
                    <h2>palette <FontAwesomeIcon icon={faPalette} /></h2>
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