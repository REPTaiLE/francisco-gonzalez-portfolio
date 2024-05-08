import { useState, useContext } from 'react';
import { DarkModeContext } from '../../../../context/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './ToggleButton.scss';
import { darkModeHandler } from '../../../../context/darkModeHandler';
import { motion } from 'framer-motion';

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
    <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        <a className={`toggle-button ${isDark ? 'dark-mode' : ''}`} onClick={toggleDarkMode} > 
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </a>
    </motion.div>
  );
};

export default ToggleButton;