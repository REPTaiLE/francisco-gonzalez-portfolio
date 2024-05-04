import './ThunderTheme.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/DarkModeContext';

const ThunderTheme = () => {
    // Dark Mode Handler
    const [{ isDark, theme }] = useContext(DarkModeContext);

    return (
        <div className='main-content-thunder' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
            <div className='main-content-thunder__title'>
                <h1>Thunder Focus</h1>
                <h3 style={{color: isDark ? theme.color : theme.color}}>A sparkling theme like Thunder to code at night</h3>
            </div>
            <div className='main-content-thunder__image'>
                <img src='/theme-image.png' alt='Theme Illustration' />
            </div>
            <div className='main-content-thunder__info'>

                <p className={isDark ? '' : 'text-light'}>Thunder Focus is a Theme for <a href='https://code.visualstudio.com' target='_blank'>Visual Studio Code</a> thinked for those dark nights or the lack of illumination.
                The color palette was something I always wanted to use and this project fit perfectly.
                Thunder Focus is developed simply with Json and <a href='https://www.npmjs.com/package/generator-code' target='_blank'>Yo Code</a> which is a template generator for building VSC extensions.
                <br />
                Despite the fact I've always been looking to build React projects or websites more elaborated, being able to develop a Theme for VSC caught my attention. Everything that has to be with design will ever welcome to try it.
                <br />
                This theme is available at the VSC Marketplace for free and also able to be cloned in the repository of the project, so if you are going to clone it in your machine I will thank you for following me on Github!   
                <br />
                </p>

                <div className='icon-container' title='VSC Marketplace'>
                    <a href='https://marketplace.visualstudio.com/items?itemName=REPTaiLE.thunder-focus' className='link' target='_blank'>
                        <img src='/vsc-icon.png' alt='vsc-icon' />
                        <h4>Visual Studio Code</h4>
                    </a>
                </div>

                <div className='icon-container-two' title='Project Repository'>
                    <a href='https://github.com/REPTaiLE/Thunder-Focus' className='link-two' target='_blank'>
                        <img src='/github-icon.png' alt='vsc-icon' />
                        <h4>Project Repository</h4>
                    </a>
                </div>

                <div className='palette-container' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
                    <h2>palette <FontAwesomeIcon icon={faPalette} /></h2>
                    <br />
                    <div className='palette'>
                        <div className='palette-one'>
                            <h5>#000814</h5>
                        </div>
                        <div className='palette-two'>
                            <h5>#001d3d</h5>
                        </div>
                        <div className='palette-three'>
                            <h5>#003566</h5>
                        </div>
                        <div className='palette-four'>
                            <h5>#ffd60a</h5>
                        </div>
                        <div className='palette-five'>
                            <h5>#ffc300</h5>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default ThunderTheme;