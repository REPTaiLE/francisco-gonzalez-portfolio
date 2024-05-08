import './Language.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Language = () => {
    // Language Handler
    const { i18n } = useTranslation();
    const [isEsp, setIsEsp] = useState(false);
    const [contentOpacity, setContentOpacity] = useState(1); 

    const toggleLanguage = () => {
        const newLang = isEsp ? 'en' : 'es'; 
        
        // Fade out content
        setContentOpacity(.8);

        setTimeout(() => {
            i18n.changeLanguage(newLang);
            setIsEsp(!isEsp);
            setContentOpacity(1);
        }, 200);
    };

    return (
        <motion.div 
            style={{ opacity: contentOpacity }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <a className={`toggle-button ${isEsp ? 'spanish' : ''}`} onClick={toggleLanguage} title={`${isEsp ? 'Cambiar a Inglés' : 'Change to Spanish'}`} style={{color: isEsp ? '#E8740A' : '#E8740A'}}>
                <FontAwesomeIcon icon={isEsp ? faGlobe : faEarthAmericas} />
            </a>
        </motion.div>
    );
}

export default Language;