import './App.css';
import React, {useEffect} from "react";
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
    useEffect(() => {
        // 设置标题
        document.title = 'DPEI';

        // 设置图标
        const icon = document.createElement('link');
        icon.rel = 'icon';
        icon.type = 'image/jpg';
        icon.href = './src/logo.jpg';
        document.head.appendChild(icon);

        // 在组件卸载时清理
        return () => {
            document.head.removeChild(icon);
        };
    }, []);
  return (
    <div >
      <Provider store = {store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />

            <Route path="/FlatMarkers" element={<FlatMarkers/>} />

              <Route path="/Urn" element={<Urn/>} />

              <Route path="/MemorialArches" element={<MemorialArches/>} />

              <Route path="/FlatMarkers_en" element={<FlatMarkers_en/>} />
              <Route path="/FamilyMonument" element={<FamilyMonument/>} />

              <Route path="/SingleMonument" element={<SingleMonument/>} />

              <Route path="/SingleMonument_en" element={<SingleMonument_en/>} />

              <Route path="/SlantMarkers" element={<SlantMarkers/>} />

              <Route path="/SlantMarkers_en" element={<SlantMarkers_en/>} />

              <Route path="/DoubleMonument" element={<DoubleMonument/>} />

              <Route path="/ShapedMonument" element={<ShapedMonument/>} />

              <Route path="/DoubleMonument_en" element={<DoubleMonument_en/>} />

            <Route path="/About_us" element={<AboutUs/>} /> 

            <Route path="/ProductAndService" element={<ProductAndService/>} /> 

            <Route path="/HowToOrder" element={<HowToOrder/>} /> 

            <Route path="/FAQ" element={<FAQ/>} /> 

            <Route path="/FAQ_en" element={<FAQ_en/>} /> 

            <Route path="/Privacy" element={<Privacy/>} /> 

            <Route path="/ContactUs" element={<ContactUs/>} /> 
          </Routes>


       </BrowserRouter>
       </Provider>
    </div>
  );
}

export default App;