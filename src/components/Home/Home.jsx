import './Home.scss';
import Navbar from '../Navbar/Navbar';
import MainContent from './sub-components/MainContent/MainContent';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='grid-container'>
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
}

export default Home;