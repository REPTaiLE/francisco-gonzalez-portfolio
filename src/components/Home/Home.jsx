import './Home.scss';
import Navbar from '../Navbar/Navbar';
import MainContent from './sub-components/MainContent/MainContent';
import Footer from '../Footer/Footer';
import { useState, useEffect, useContext } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { DarkModeContext } from '../../context/DarkModeContext';

const Home = () => {
    // Dark Mode Handler
    const [{ isDark, theme }]  = useContext(DarkModeContext);

    // Loading Screen 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);


    return (
                
                <div className='grid-container' style={{backgroundColor: isDark ? theme.backgroundColor : theme.backgroundColor}}>

                    { loading ? 

                    <ClipLoader
                        color={'#E8740A'}
                        loading={loading}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className='loader-spinner'
                    />

                    :
                    
                    <>

                        <Navbar />
                        <MainContent />
                        <Footer />

                    </>

                    }

                </div>

    );
}

export default Home;