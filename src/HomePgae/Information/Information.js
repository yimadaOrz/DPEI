import './Information.css';
import { TelephoneFill, GeoAltFill, EnvelopeFill, Clock } from 'react-bootstrap-icons';
import WeChatImg from './wechat.svg';
import { useTranslation } from "react-i18next";
import i18n from "../../text/i18n";
const Information = () =>{
  const { t } = useTranslation();
    return(
        <div className="information-container">
            <div className="information-inner-left-container">
              <h1 className='information_title'>{t("information.item1.item1")}</h1>
              <div className='phone_wrapper'>
                <TelephoneFill className='phone_img'/>
                <p  style={{fontSize:"24px",letterSpacing:"0px"}}>{t("information.item1.subitem1")}</p>
              </div>
              <a href="tel:+1-718-492-8959" className='remove_a_tag_css' ><p>718-492-8959</p></a>
              <a href="tel:+1-718-492-5111" className='remove_a_tag_css'> <p>718-492-5111</p> </a>
                <div className='location_wrapper'>
                 <GeoAltFill className='location_img'/>
                 <p  style={{fontSize:"24px",letterSpacing:"0px"}}>{t("information.item1.subitem2")}</p>
                </div>
                <a href="https://www.google.com/maps/place/New+York+Dragon+Peace+Enterprise+Inc./@40.646302,-74.0128477,21z/data=!4m12!1m5!3m4!2zNDDCsDM4JzQ3LjEiTiA3NMKwMDAnNDYuNiJX!8m2!3d40.6464215!4d-74.0129448!3m5!1s0x89c25ab14f74fdfd:0xba84a52860a25f86!8m2!3d40.6464203!4d-74.0129509!16s%2Fg%2F11bx8ht08z?entry=ttu" className='remove_a_tag_css' target="_blank" rel="noopener noreferrer">
                <p>5008 4th Ave</p>
                </a>
                <a href="https://www.google.com/maps/place/New+York+Dragon+Peace+Enterprise+Inc./@40.646302,-74.0128477,21z/data=!4m12!1m5!3m4!2zNDDCsDM4JzQ3LjEiTiA3NMKwMDAnNDYuNiJX!8m2!3d40.6464215!4d-74.0129448!3m5!1s0x89c25ab14f74fdfd:0xba84a52860a25f86!8m2!3d40.6464203!4d-74.0129509!16s%2Fg%2F11bx8ht08z?entry=ttu" className='remove_a_tag_css' target="_blank" rel="noopener noreferrer">

                    <p>Brooklyn NY, 11220</p>
                </a>
                <div className='email_wrapper'>
                 <EnvelopeFill className='email_img'/>
                 <p  style={{fontSize:"24px",letterSpacing:"0px"}}>{t("information.item1.subitem3")}</p>
                </div>
                <a href="mailto:dpeistone@gmail.com" className='remove_a_tag_css' ><p >dpeistone@gmail.com</p></a>
                <a href="mailto:dpetrade@hotmail.com" className='remove_a_tag_css' ><p>dpetrade@hotmail.com</p></a>
                <div className='wechat_wrapper'>
                 <img src = {WeChatImg} className='wechat_img'/>
                 <p  style={{fontSize:"24px",letterSpacing:"0px"}}>{t("information.item1.subitem4")}</p>
                </div>
                <p >@dpeiny</p>
            </div>

     
            {/* <div className="information-inner-right-container">
              <h1>{t("information.item2.item2")}</h1>

              <div className='inner_wrapper'>

              <div className='monday_wrapper'>
                <h5>{t("information.item2.subitem1")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='tuesday_wrapper'>
                <h5>{t("information.item2.subitem2")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='wednesday_wrapper'>
                <h5>{t("information.item2.subitem3")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='thursday_wrapper'>
                <h5>{t("information.item2.subitem4")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='friday_wrapper'>
                <h5>{t("information.item2.subitem5")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>
              <div className='saturday_wrapper'>
                <h5>{t("information.item2.subitem6")}</h5>
                <p >{t("information.item2.subitem8")}</p>
              </div>
              <div className='sunday_wrapper'>
                <h5>{t("information.item2.subitem7")}</h5>
                <p>10:00AM – 6:00PM</p>
              </div>

              </div>

            </div>
         */}


          <div className="information-inner-right-container">
              <h1 className='information_title'>{t("information.item2.item2")}</h1>

              {/* <div className='inner_wrapper'> */}

           
 
              <table className='table_container'>
                  <tbody>
                <tr >
                  <td><p style={{fontSize:"24px",letterSpacing:'0px'}} >{t("information.item2.subitem1")}</p></td>
                  <td><p style={{marginLeft:"30px"}}>10:00AM – 6:00PM</p></td>
                </tr>
                <tr>
                  <td><p style={{fontSize:"24px",letterSpacing:'0px'}}>{t("information.item2.subitem2")}</p></td>
                  <td><p style={{marginLeft:"30px"}}>10:00AM – 6:00PM</p></td>
                </tr>
                <tr>
                  <td><p style={{fontSize:"24px",letterSpacing:'0px'}}>{t("information.item2.subitem3")}</p></td>
                  <td><p style={{marginLeft:"30px"}}>10:00AM – 6:00PM</p></td>
                </tr>
                <tr>
                  <td><p style={{fontSize:"24px",letterSpacing:'0px'}}>{t("information.item2.subitem4")}</p></td>
                  <td><p style={{marginLeft:"30px"}}>10:00AM – 6:00PM</p></td>
                </tr>
                <tr>
                  <td><p style={{fontSize:"24px",letterSpacing:'0px'}}>{t("information.item2.subitem5")}</p></td>
                  <td><p style={{marginLeft:"30px"}}>10:00AM – 6:00PM</p></td>
                </tr>
                <tr>
                  <td><p style={{fontSize:"24px",letterSpacing:'0px'}}>{t("information.item2.subitem6")}</p></td>
                  <td><p style={{marginLeft:"30px"}}>{t("information.item2.subitem8")}</p></td>
                </tr>
                <tr>
                  <td><p style={{fontSize:"24px",letterSpacing:'0px'}}>{t("information.item2.subitem7")}</p></td>
                  <td><p style={{marginLeft:"30px"}}>10:00AM – 5:00PM</p></td>
                </tr>
                  </tbody>
              </table>

              {/* <div className='monday_wrapper'>
                <p>{t("information.item2.subitem1")} 10:00AM – 6:00PM </p>
               
              </div>
              <div className='tuesday_wrapper'>
              <p>{t("information.item2.subitem2")} 10:00AM – 6:00PM </p>
              </div>
              <div className='wednesday_wrapper'>
              <p>{t("information.item2.subitem3")} 10:00AM – 6:00PM </p>
              </div>
              <div className='thursday_wrapper'>
              <p>{t("information.item2.subitem4")} 10:00AM – 6:00PM </p>
              </div>
              <div className='friday_wrapper'>
              <p>{t("information.item2.subitem5")} 10:00AM – 6:00PM </p>
              </div>
              <div className='saturday_wrapper'>
                <p>{t("information.item2.subitem6")} {t("information.item2.subitem8")} </p>
              
              </div>
              <div className='sunday_wrapper'>
                <p>{t("information.item2.subitem7")} 10:00AM – 6:00PM</p>
            
              </div> */}

              </div>

            {/* </div> */}
        


        </div>
    )
}



export default Information;