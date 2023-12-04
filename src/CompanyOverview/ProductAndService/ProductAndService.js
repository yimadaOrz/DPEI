
import Navbar from '../../NavBar/Navbarr';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useTranslation } from "react-i18next";
import './ProductAndService.css';

const ProductAndService = () => {
    const  {t} = useTranslation();
    return(
        <div>
            <Header/>
            <Navbar/>
            <div style={{marginTop:"40px"}}> 
                <div  className="ProductAndService_container">
                    <h1>{t("ProductAndService.title")}</h1>
                    <h4>{t("ProductAndService.summary1")}</h4>
                    <h4>{t("ProductAndService.summary2")}</h4>
                    <h4>{t("ProductAndService.item1.item1")}</h4>
                    <ul >
                    <h4><li>{t("ProductAndService.item1.subitem1")}</li></h4>
                    <h4><li>{t("ProductAndService.item1.subitem2")}</li></h4>
                  </ul>
                  <h4>{t("ProductAndService.item2.item2")}</h4>
                    <ul >
                    <h4><li>{t("ProductAndService.item2.subitem1")}</li></h4>
                    <h4><li>{t("ProductAndService.item2.subitem2")}</li></h4>
                  </ul>
                  <h4>{t("ProductAndService.item3.item3")}</h4>
                    <ul >
                    <h4><li>{t("ProductAndService.item3.subitem1")}</li></h4>
                    <h4><li>{t("ProductAndService.item3.subitem2")}</li></h4>
                    <h4><li>{t("ProductAndService.item3.subitem3")}</li></h4>
                  </ul>
                  <h4>{t("ProductAndService.item4")}</h4>
                  <h4>{t("ProductAndService.item5.item5")}</h4>
                  <ul>
                     <li><h4>{t("ProductAndService.item5.subitem1")}</h4></li>
                  </ul>
                  <h5>{t("ProductAndService.item5.subtext1")}</h5>
                  
                  <ul >
                     <li><h4>{t("ProductAndService.item5.subitem2")}</h4></li>
                  </ul>
                  <h5>{t("ProductAndService.item5.subtext2")}</h5>

                  <ul >
                     <li><h4>{t("ProductAndService.item5.subitem3")}</h4></li>
                  </ul>
                  <h5>{t("ProductAndService.item5.subtext3")}</h5>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductAndService;