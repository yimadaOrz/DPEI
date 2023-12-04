import Navbar from '../../NavBar/Navbarr';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useTranslation } from "react-i18next";
import "./HowToOrder.css";
const HowToOrder = () => {
    const {t} = useTranslation();
    return(
        <div>
            <Header/>
            <Navbar/>
                <div style={{marginTop:"40px"}}>
                  <div className="howToOrder_container">
                  <h4>{t("HowToOrder.item1")}</h4>
                  <h4>{t("HowToOrder.item2")}</h4>
                  <h4>{t("HowToOrder.item3")}</h4>
                  <h4>{t("HowToOrder.item4")}</h4>
                  <h4>{t("HowToOrder.item5.item5")}</h4>
                  <ul >
                  <h5><li>{t("HowToOrder.item5.subitem1")}</li></h5>
                  <h5><li>{t("HowToOrder.item5.subitem2")}</li></h5>
                  <h5><li>{t("HowToOrder.item5.subitem3")}</li></h5>
                  </ul>
                  <h4>{t("HowToOrder.item6")}</h4>
                  <h4>{t("HowToOrder.item7")}</h4>
                  <h4>{t("HowToOrder.item8")}</h4>
                  <h4>{t("HowToOrder.item9.item9")}</h4>
                  <ul >
                  <h5><li>{t("HowToOrder.item9.subitem1")}</li></h5>
                  <h5><li>{t("HowToOrder.item9.subitem2")}</li></h5>
                  <h5><li>{t("HowToOrder.item9.subitem3")}</li></h5>
                  </ul>
                  <h4>{t("HowToOrder.item10.item10")}</h4>
                  <ul >
                  <h5><li>{t("HowToOrder.item10.subitem1")}</li></h5>
                  <h5><li>{t("HowToOrder.item10.subitem2")}</li></h5>
                  <h5><li>{t("HowToOrder.item10.subitem3")}</li></h5>
                  <h5><li>{t("HowToOrder.item10.subitem4")}</li></h5>
                  </ul>
                  <h4>{t("HowToOrder.item11")}</h4>
                  <h4>{t("HowToOrder.item12")}</h4>
                  <h4>{t("HowToOrder.item13")}</h4>
            </div>
                </div>
            <Footer/>
        </div>
    );
}

export default HowToOrder;