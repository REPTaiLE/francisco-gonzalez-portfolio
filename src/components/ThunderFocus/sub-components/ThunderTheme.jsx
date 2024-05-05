import './ThunderTheme.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/DarkModeContext';
import { useTranslation } from 'react-i18next';

const ThunderTheme = () => {
    // Dark Mode Handler
    const [{ isDark, theme }] = useContext(DarkModeContext);

    // Language Handler
    const { t } = useTranslation();

    return (
        <div className='main-content-thunder' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
            <div className='main-content-thunder__title'>
                <h1>Thunder Focus</h1>
                <h3 style={{color: isDark ? theme.color : theme.color}}>{t('thunder-focus.subtitle')}</h3>
            </div>
            <div className='main-content-thunder__image'>
                <img src='/theme-image.png' alt='Theme Illustration' />
            </div>
            <div className='main-content-thunder__info'>

                <p className={isDark ? '' : 'text-light'}>{t('thunder-focus.paragraph.one')} <a href='https://code.visualstudio.com' target='_blank'>Visual Studio Code</a> {t('thunder-focus.paragraph.two')}
                {t('thunder-focus.paragraph.three')}
                {t('thunder-focus.paragraph.four')} <a href='https://www.npmjs.com/package/generator-code' target='_blank'>Yo Code</a> {t('thunder-focus.paragraph.five')}
                <br />
                {t('thunder-focus.paragraph.six')}
                <br />
                {t('thunder-focus.paragraph.seven')} 
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
                        <h4>{t('c-renca.github-text')}</h4>
                    </a>
                </div>

                <div className='palette-container' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
                    <h2>{t('c-renca.palette')} <FontAwesomeIcon icon={faPalette} /></h2>
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