import './MainContent.scss';
import About from '../../../About/About';
import Projects from '../../../Projects/Projects';
import Contact from '../../../Contact/Contact';
import { useContext } from 'react';
import { DarkModeContext } from '../../../../context/DarkModeContext';

const MainContent = () => {
    // Dark Mode Context
    const [{theme, isDark}] = useContext(DarkModeContext);

    return (
        <main className={isDark ? 'main-content' : 'main-content--light'}  id='section-one'>
            
            <div className='main-content__main-section'>

                <div className='main-content__section-one'>

                    <h4 className={isDark ? '' : 'title-light'}>Hi, my name is</h4>
                    <h1 className={isDark ? '' : 'name-light'}>Francisco González.</h1>
                    <h2 className={isDark ? '' : 'subtitle-light'}>I build solutions for the web.</h2>
                    <p className={isDark ? '' : 'paragraph-light'}>Recently graduated from Generation Chile as a Fullstack JavaScript Developer, my focus is on building good web experciences and improve my ability to create solutions based on accesible websites with goog aesthetics.</p>

                    <div className='main-content__buttons'>

                        <a href='#contact'><button className={isDark ? 'contact-button' : 'contact-button--light'}>Contact</button></a>
                        <a href='#projects'><button className={isDark ? 'project-button' : 'project-button--light'}>Projects</button></a>

                    </div>

                </div>

                <div className='main-content__section-two'>

                    <a href='https://www.linkedin.com/in/francisco-arnoldo/' title='Go to my LinkedIn' target='_blank'>
                        <img src='/profile.png' className={isDark ? 'main-content__img' : 'main-content__img--light'} alt='Profile Picture'/>
                    </a>

                </div>
        
            </div>

            <div className={isDark ? 'main-content__about' : 'main-content__about--light'} id='about'>

                <h2 style={{color: isDark ? theme.color : theme.color}}><hr style={{color: isDark ? theme.color : theme.color, opacity: isDark ? '.1' : '1'}}/>About Me</h2>
                <About />

            </div>

            <div className={isDark ? 'main-content__projects' : 'main-content__projects--light'} id='projects'>

                <h2 style={{color: isDark ? theme.color : theme.color}}><hr style={{color: isDark ? theme.color : theme.color, opacity: isDark ? '.1' : '1'}} />Projects</h2>
                <Projects />

            </div>

            <div className={isDark ? 'main-content__contact' : 'main-content__contact--light'} id='contact'>

                <h2 style={{color: isDark ? theme.color : theme.color}}>Get in touch</h2>
                <Contact />

            </div>

        </main>
    );
}

export default MainContent;