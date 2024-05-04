import { useState, useContext } from 'react';
import { DarkModeContext } from '../../../../context/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './ToggleButton.scss';
import { darkModeHandler } from '../../../../context/darkModeHandler';

const ToggleButton = ({ onClick }) => {
  // Dark Mode Handler
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Context Handler
  const [{ isDark }] = useContext(DarkModeContext);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    darkModeHandler(!isDark);
    onClick();
  };

  return (
    <>
        <a className={`toggle-button ${isDark ? 'dark-mode' : ''}`} onClick={toggleDarkMode} > 
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </a>
    </>
  );
};

export default ToggleButton;