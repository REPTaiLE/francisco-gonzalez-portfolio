import './Language.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

const Language = () => {
    const [isEsp, setIsEsp] = useState(false);

    const toggleLanguage = () => {
      setIsEsp(!isEsp);
    };

    return (
        <>
            <a className={`toggle-button ${isEsp ? 'spanish' : ''}`} onClick={toggleLanguage} title={`${isEsp ? 'Change to English' : 'Change to Spanish'}`} style={{color: isEsp ? '#E8740A' : '#E8740A'}}>
                <FontAwesomeIcon icon={isEsp ? faGlobe : faEarthAmericas} />
            </a>
        </>
    );
}

export default Language;