import './About.scss';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

const About = () => {
    // Dark Mode Context
    const [{theme, isDark}] = useContext(DarkModeContext);

    // CV Download Handler
    const cvUrl = 'Certificado_Generation.pdf';
    
    return (
        <div className='section-about'>

            <div className='section-about__one'> 
                <p style={{textAlign: 'justify'}} className={isDark ? '' : 'paragraph--light'}>Hi!, my name is Francisco and I love web development. I started in 2022 when I participated on a frontend development course on USACH. Since then I change the paradigmn I had about programming, because I thought I have never be able to write code.</p>
                <br />
                <p style={{textAlign: 'justify'}} className={isDark ? '' : 'paragraph--light'}>Then I kept learning by myself while working at the same time for about 2 years, making personal mini projects and acummulating experience on web development since I was a risk prevention engineer and my aim was to shift career and move on to the TI industry until today.</p>
                <br />
                <p style={{textAlign: 'justify'}} className={isDark ? '' : 'paragraph--light'}>Because of the fact that being autodidact was pretty difficult and I was told about a bootcamp program named Generation Chile and I decided to apply to the program. In the first attempt I wasn't selected and I felt sad but It kept me motivated to apply again 3 months later where this time I was picked and joined on November 2023.</p>    
                <br />
                <p style={{textAlign: 'justify'}} className={isDark ? '' : 'paragraph--light'}>Now, three months later I joined the bootcammp I have worked on a project for a real clien, where I developed a digital learning platform where people of the Municipality of Renca will have the privilege to enroll on online courses with the goal of decreasing the differences of job opportunities between people who don't have formal superior education and give them the chance to form as professionals on a specified area of interest.</p>
                <br />
                <p style={{textAlign: 'justify'}} className={isDark ? '' : 'paragraph--light'}>Today I'm <a href={cvUrl} target="_blank" className={isDark ? '' : 'anchor--light'}>graduated</a> from <a href='https://chile.generation.org' target='_blank' className={isDark ? '' : 'anchor--light'}>Generation Chile</a> and I'm looking for the chance to work as a web developer and keep growing and enjoying the journey!</p>
            </div>

            <div className='section-about__two'>

                <div className='section-about__img--container'>
                    <img src='/profileTwo.png' className={isDark ? 'section-about__img' : 'section-about__img--light'} alt='Profile Picture' />
                </div>

                <legend className='section-about__label' style={{color: isDark ? theme.color : theme.color}}>
                    Technologies I’ve been working with recently:

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