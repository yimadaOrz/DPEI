import './AboutUs.css';
import AboutUsImage from './DPEI.png';
import Navbar from '../../NavBar/Navbarr';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useTranslation } from "react-i18next";
const AboutUs = () =>{
    const { t, i18n } = useTranslation();

    const getLanguageClassName = () => {
        const currentLanguage = i18n.language.toLowerCase();

        if (currentLanguage === 'zh') {
            return 'multi-language-text multi-language-text-zh';
        } else {
            return 'multi-language-text multi-language-text-en';
        }
    };

    return(
        <>
        <Header/>
        <Navbar/>
        <div className='AboutUs_container'>


            <div className='AboutUs_upper_container'>
                <div className='AboutUs_upper_left_container'>
                    <img className= "about_us_img" src ={AboutUsImage}/>
                </div>

                <div className='AboutUs_upper_right_container'>
                    <h2 className={`AboutUs_upper_right_title`}>{t("AboutUs.title")}</h2>
                    <h4 className={`AboutUs_upper_right_subTitle1 ${getLanguageClassName()}`}>
                        {t("AboutUs.item1.item1")}
                        <h4 className={`AboutUs_upper_right_subTitle2 `}>{t("AboutUs.item1.item2")}</h4>
                        <hr className='AboutUs_line'/>
                    </h4>
                    <p className='AboutUs_upper_right_text'>{t("AboutUs.item2.item2")}</p>
                    <p className='AboutUs_upper_right_text'>{t("AboutUs.item2.subitem1")}</p>
                </div>

            </div>



            {/*<div className='AboutUs_lower_container'>*/}

            {/*    <div className='AboutUs_lower_left_container'>*/}
            {/*        <h4 className='AboutUs_lower_left_Title'>Yonglong Stone Stele</h4>*/}
            {/*        <hr className='AboutUs_line'/>*/}
            {/*        <p className='AboutUs_lower_left_text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>*/}
            {/*    </div>*/}

            {/*    <div  className='AboutUs_lower_right_container'>*/}
            {/*        <img className="second_img" src ={AboutUsImage}/>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </div>
        <Footer/>
        </>
    )
}


export default AboutUs;