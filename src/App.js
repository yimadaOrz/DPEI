import './App.css';
import React from "react";
import LiveChat from './LiveChat/LiveChat';
import Header from './Header/Header';
import HomePage from './HomePgae/HomePage';
import Carousels from './HomePgae/Carousels/Carousels';
import FlatMarkers from './Gallery/FlatMarkers/FlatMarkers';
import AboutUs from './CompanyOverview/AboutUs/AboutUs';
import ProductAndService from './CompanyOverview/ProductAndService/ProductAndService';
import HowToOrder from './CompanyOverview/HowToOrder/HowToOrder';
import FAQ from './CompanyOverview/FAQ/FAQ';
import FAQ_en from './CompanyOverview/FAQ/FAQ_en';
import Privacy from './CompanyOverview/Privacy/Privacy';
import ContactUs from './ContactUs/ContactUs';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import SingleMonument from '../src/Gallery/SingleMonument/SingleMonument';
import SingleMonument_en from '../src/Gallery/SingleMonument_en/SingleMonument_en';
import ShapedMonument from './Gallery/ShapedMonument/ShapedMonument';

import DoubleMonument from './Gallery/DoubleMonument/DoubleMonument';
import DoubleMonument_en from './Gallery/DoubleMonument_en/DoubleMonument_en';

import SlantMarkers from './Gallery/SlantMarkers/SlantMarkers';
import SlantMarkers_en from './Gallery/SlantMarkers_en/SlantMarkers_en';
import Urn from './Gallery/Urn/Urn';
import MemorialArches from './Gallery/MemorialArches/MemorialArches';
import FlatMarkers_en from './Gallery/FlatMarkers_en/FlatMarkers_en';

import FamilyMonument from './Gallery/FamilyMonument/FamilyMonument';


import i18n from './text/i18n';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div >
      <Provider store = {store}>
      <BrowserRouter>
          <Routes>
            <Route path="/DPEI" element={<HomePage/>} /> 
          </Routes>
          <Routes>
            <Route path="/FlatMarkers" element={<FlatMarkers/>} />
          </Routes>
          <Routes>
              <Route path="/Urn" element={<Urn/>} />
          </Routes>
          <Routes>
              <Route path="/MemorialArches" element={<MemorialArches/>} />
          </Routes>
          <Routes>
              <Route path="/FlatMarkers_en" element={<FlatMarkers_en/>} />
          </Routes>
          {/*<Routes>*/}
          {/*    <Route path="/LiveChat" element={<LiveChat/>} />*/}
          {/*</Routes>*/}

          <Routes>
            <Route path="/FamilyMonument" element={<FamilyMonument/>} />
          </Routes>
          <Routes>
              <Route path="/SingleMonument" element={<SingleMonument/>} />
          </Routes>
          <Routes>
              <Route path="/SingleMonument_en" element={<SingleMonument_en/>} />
          </Routes>
          <Routes>
              <Route path="/SlantMarkers" element={<SlantMarkers/>} />
          </Routes>
          <Routes>
              <Route path="/SlantMarkers_en" element={<SlantMarkers_en/>} />
          </Routes>
          <Routes>
              <Route path="/DoubleMonument" element={<DoubleMonument/>} />
          </Routes>
          <Routes>
              <Route path="/ShapedMonument" element={<ShapedMonument/>} />
          </Routes>
          <Routes>
              <Route path="/DoubleMonument_en" element={<DoubleMonument_en/>} />
          </Routes>
          <Routes>
            <Route path="/About_us" element={<AboutUs/>} /> 
          </Routes>

          <Routes>
            <Route path="/ProductAndService" element={<ProductAndService/>} /> 
          </Routes>

          <Routes>
            <Route path="/HowToOrder" element={<HowToOrder/>} /> 
          </Routes>
        
          <Routes>
            <Route path="/FAQ" element={<FAQ/>} /> 
          </Routes>
      
  
          <Routes>
            <Route path="/FAQ_en" element={<FAQ_en/>} /> 
          </Routes>
   
          <Routes>
            <Route path="/Privacy" element={<Privacy/>} /> 
          </Routes>
     
          {/* Contact Us */}

          <Routes>
            <Route path="/ContactUs" element={<ContactUs/>} /> 
          </Routes>


       </BrowserRouter>
       </Provider>
    </div>
  );
}

export default App;
