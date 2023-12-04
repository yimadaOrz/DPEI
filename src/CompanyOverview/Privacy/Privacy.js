import Navbar from '../../NavBar/Navbarr';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Privacy.css';
import { useTranslation } from "react-i18next";

const Privacy = () => {
    const { t } = useTranslation();
    return(
        <div>
            <Header/>
            <Navbar/>
            <div className='privacy_container'>
                <div>
                    <h5 className='privacy_text'>{t("Privacy.item1")}</h5>
                    <h5 className='privacy_text'>{t("Privacy.item2")}</h5>
                
                
                
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Privacy;