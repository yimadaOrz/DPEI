import Navbarr from '../NavBar/Navbarr';
import Carousels from './Carousels/Carousels';
import Information from './Information/Information'
import Footer from '../Footer/Footer';
import LiveChat from '../LiveChat/LiveChat';
import Header from '../Header/Header';


const HomePage = () =>{
    return(
       <div>
        <Header/>
         <Navbarr/>
         <Carousels/>
         <Information/>
         <LiveChat/>
         <Footer/>
       
       </div>

    )
}

export default HomePage;