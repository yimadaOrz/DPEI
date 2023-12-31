import Navbar from '../NavBar/Navbarr';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GoogleMap from '../Map/Map';
import { Input } from 'antd';

import Button from 'react-bootstrap/Button';
import { TelephoneFill, GeoAltFill, EnvelopeFill, Clock } from 'react-bootstrap-icons';
import WeChatImg from '../HomePgae/Information/wechat.svg';
import { useTranslation } from "react-i18next";


import './ContactUs.css';
import AboutUsImage from "../CompanyOverview/AboutUs/DPEI.jpg";
const { TextArea } = Input;


const ContactUs = () => {
    const {t} = useTranslation();
    return(
        <div>
            <Header/>
            <Navbar/>
            <div className = "ContactUs_container">
                <div  className = "ContactUs_inner_container">
                   <div className = "ContactUs_inner_left_container">
                       <img className= "about_us_img" src ={AboutUsImage}/>

                       {/*<h1 className='left_title'>{t("ContactUs.item1.title")}</h1>*/}
                       {/*<div className='ContactUs_inner_left_flexFirrstRow_container'>*/}
                       {/*<TextArea className ="name_field"  placeholder={t("ContactUs.item1.subitem1")}/>*/}
                       {/*<TextArea className ="email_field"  placeholder={t("ContactUs.item1.subitem2")}/>*/}
                       {/*</div>*/}
                       {/*<div className='ContactUs_inner_left_flexSecondRow_container'>*/}
                       {/*<TextArea rows={2} cols={10} className ="phone_field"  placeholder={t("ContactUs.item1.subitem3")}/>*/}
                       {/*</div>*/}
                       {/*<div className='ContactUs_inner_left_flexThirdRow_container'>*/}
                       {/*<TextArea rows={2} cols={10} className ="message_field"   placeholder={t("ContactUs.item1.subitem4")}/>*/}
                       {/*</div>*/}
                       {/*<Button variant="primary" className='submit_button'>Send</Button>{' '}*/}
                   </div>
                   
                   <div className = "ContactUs_inner_right_container">
                       <h1 className='right_title'>{t("ContactUs.item2.title")}</h1>
                        <div className = "inner_wrapper" style={{marginTop:"5px"}}>
                             <div className='right_firstRow'>
                                <TelephoneFill className='telephone'/>
                                <h5 className='h5'> {t("ContactUs.item2.subitem1")}</h5>
                            </div>
                            <a href="tel:+1-718-492-8959" className='remove_a_tag_css' ><p className='p'>718-492-8959</p></a>
                            <a href="tel:+1-718-492-8959" className='remove_a_tag_css' ><p className='p'>718-492-5111</p></a>
                      
                             <div className='right_firstRow'>
                                <GeoAltFill className='address'/>
                                <h5 className='h5'>{t("ContactUs.item2.subitem2")}</h5>
                            </div>
                            <a href="https://www.google.com/maps/place/New+York+Dragon+Peace+Enterprise+Inc./@40.646302,-74.0128477,21z/data=!4m12!1m5!3m4!2zNDDCsDM4JzQ3LjEiTiA3NMKwMDAnNDYuNiJX!8m2!3d40.6464215!4d-74.0129448!3m5!1s0x89c25ab14f74fdfd:0xba84a52860a25f86!8m2!3d40.6464203!4d-74.0129509!16s%2Fg%2F11bx8ht08z?entry=ttu" className='remove_a_tag_css' target="_blank" rel="noopener noreferrer">
                                <p>5008 4th Ave</p>
                            </a>
                            <a href="https://www.google.com/maps/place/New+York+Dragon+Peace+Enterprise+Inc./@40.646302,-74.0128477,21z/data=!4m12!1m5!3m4!2zNDDCsDM4JzQ3LjEiTiA3NMKwMDAnNDYuNiJX!8m2!3d40.6464215!4d-74.0129448!3m5!1s0x89c25ab14f74fdfd:0xba84a52860a25f86!8m2!3d40.6464203!4d-74.0129509!16s%2Fg%2F11bx8ht08z?entry=ttu" className='remove_a_tag_css' target="_blank" rel="noopener noreferrer">

                                <p>Brooklyn NY, 11220</p>
                            </a>
                            <div className='right_firstRow'>
                                <EnvelopeFill className='email'/>
                                <h5 className='h5'>{t("ContactUs.item2.subitem3")}</h5>
                            </div>
                            <a href="mailto:dpeistone@gmail.com" className='remove_a_tag_css' ><p >dpeistone@gmail.com</p></a>
                <a href="mailto:dpetrade@hotmail.com" className='remove_a_tag_css' ><p>dpetrade@hotmail.com</p></a>
                   
                            <div className='right_firstRow'>
                                <img src={WeChatImg} className="wechat_img"/>
                                <h5 className='h5'>{t("ContactUs.item2.subitem4")}</h5>
                            </div>
                                <p className='p' >@dpeiny</p>
                        </div>
                   </div>     
                </div>
                
            </div>
            <GoogleMap />
            <Footer/>
        </div>
        
    );
}

export default ContactUs;