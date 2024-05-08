import './ThunderTheme.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/DarkModeContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; 

const ThunderTheme = () => {
    // Dark Mode Handler
    const [{ isDark, theme }] = useContext(DarkModeContext);

    // Language Handler
    const { t } = useTranslation();

    return (
        <motion.div 
            className='main-content-thunder' 
            style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                ease: "linear",
                duration: .5,
                x: { duration: 1.4 }
            }}
        >
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
                    <motion.a 
                        href='https://marketplace.visualstudio.com/items?itemName=REPTaiLE.thunder-focus' 
                        className='link' 
                        target='_blank'
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <img src='/vsc-icon.png' alt='vsc-icon' />
                        <h4>Visual Studio Code</h4>
                    </motion.a>
                </div>

                <div className='icon-container-two' title='Project Repository'>
                    <motion.a 
                        href='https://github.com/REPTaiLE/Thunder-Focus' 
                        className='link-two' 
                        target='_blank'
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <img src='/github-icon.png' alt='vsc-icon' />
                        <h4>{t('c-renca.github-text')}</h4>
                    </motion.a>
                </div>

                <div className='palette-container' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>
                    <h2>{t('c-renca.palette')} <FontAwesomeIcon icon={faPalette} /></h2>
                    <br />
                    <div className='palette'>
                        <motion.div 
                            className='palette-one'
                            whileHover={{ scale: 1.06 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <h5>#000814</h5>
                        </motion.div>
                        <motion.div 
                            className='palette-two'
                            whileHover={{ scale: 1.06 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <h5>#001d3d</h5>
                        </motion.div>
                        <motion.div 
                            className='palette-three'
                            whileHover={{ scale: 1.06 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <h5>#003566</h5>
                        </motion.div>
                        <motion.div 
                            className='palette-four'
                            whileHover={{ scale: 1.06 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <h5>#ffd60a</h5>
                        </motion.div>
                        <motion.div 
                            className='palette-five'
                            whileHover={{ scale: 1.06 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <h5>#ffc300</h5>
                        </motion.div>
                    </div>
                </div>  
            </div>
        </motion.div>
    );
}

export default ThunderTheme;