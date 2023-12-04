import './Header.css';
import LogoImage from './logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header-container">
               <div className='header_inner_left_container'>
                <Link to="/"><img className='header_image' src = {LogoImage}/></Link>
                 {/* <img className='header_image' src = {LogoImage} onClick={event =>  window.location.href='/'}/> */}
                 <h5 className='left_subtitle'>EST. 2003</h5>
               </div>
               <div className='header_inner_right_container'>
               {/* <Link to="/signup" style={{}}><h1 className='header_title'>纽约永龙石碑公司</h1></Link> */}
                  <h1 className='header_title'  onClick={event =>  window.location.href='/'}>紐約永龍石碑公司</h1>
                  <h5 className='right_subtitle'  onClick={event =>  window.location.href='/'}>New York Dragon Peace Enterprise Inc. (DPEINY)</h5>    
                </div>
        </div>
    );
  };




  export default Header;