import './App.css';
import React, {useEffect} from "react";
import loadable from '@loadable/component';


// import HomePage from './HomePgae/HomePage';
import AboutUs from './CompanyOverview/AboutUs/AboutUs';
import ProductAndService from './CompanyOverview/ProductAndService/ProductAndService';
import HowToOrder from './CompanyOverview/HowToOrder/HowToOrder';
import FAQ from './CompanyOverview/FAQ/FAQ';
import FAQ_en from './CompanyOverview/FAQ/FAQ_en';
import Privacy from './CompanyOverview/Privacy/Privacy';
import ContactUs from './ContactUs/ContactUs';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const SingleMonument = loadable(() => import('../src/Gallery/SingleMonument/SingleMonument'));
const SingleMonument_en = loadable(() => import('../src/Gallery/SingleMonument_en/SingleMonument_en'));
const ShapedMonument = loadable(() => import('./Gallery/ShapedMonument/ShapedMonument'));

const DoubleMonument = loadable(() => import('./Gallery/DoubleMonument/DoubleMonument'));
const DoubleMonument_en = loadable(() => import('./Gallery/DoubleMonument_en/DoubleMonument_en'));

const SlantMarkers = loadable(() => import('./Gallery/SlantMarkers/SlantMarkers'));
const SlantMarkers_en = loadable(() => import('./Gallery/SlantMarkers_en/SlantMarkers_en'));
const Urn = loadable(() => import('./Gallery/Urn/Urn'));
const MemorialArches =  loadable(() => import('./Gallery/MemorialArches/MemorialArches'));
const FlatMarkers_en = loadable(() => import('./Gallery/FlatMarkers_en/FlatMarkers_en'));

const FamilyMonument = loadable(() => import('./Gallery/FamilyMonument/FamilyMonument'));

const HomePage = loadable(() => import('./HomePgae/HomePage'));
const FlatMarkers = loadable(() => import('./Gallery/FlatMarkers/FlatMarkers'));


function App() {
    useEffect(() => {
        // 设置标题
        document.title = 'DPEI';

        // 设置图标
        const icon = document.createElement('link');
        icon.rel = 'icon';
        icon.type = 'image/jpeg';
        icon.href = './src/logo.jpg';
        document.head.appendChild(icon);

        // 在组件卸载时清理
        return () => {
            document.head.removeChild(icon);
        };
    }, []);
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>

                        <Route path="/FlatMarkers" element={<FlatMarkers/>}/>

                        <Route path="/Urn" element={<Urn/>}/>

                        <Route path="/MemorialArches" element={<MemorialArches/>}/>

                        <Route path="/FlatMarkers_en" element={<FlatMarkers_en/>}/>
                        <Route path="/FamilyMonument" element={<FamilyMonument/>}/>

                        <Route path="/SingleMonument" element={<SingleMonument/>}/>

                        <Route path="/SingleMonument_en" element={<SingleMonument_en/>}/>

                        <Route path="/SlantMarkers" element={<SlantMarkers/>}/>

                        <Route path="/SlantMarkers_en" element={<SlantMarkers_en/>}/>

                        <Route path="/DoubleMonument" element={<DoubleMonument/>}/>

                        <Route path="/ShapedMonument" element={<ShapedMonument/>}/>

                        <Route path="/DoubleMonument_en" element={<DoubleMonument_en/>}/>

                        <Route path="/About_us" element={<AboutUs/>}/>

                        <Route path="/ProductAndService" element={<ProductAndService/>}/>

                        <Route path="/HowToOrder" element={<HowToOrder/>}/>

                        <Route path="/FAQ" element={<FAQ/>}/>

                        <Route path="/FAQ_en" element={<FAQ_en/>}/>

                        <Route path="/Privacy" element={<Privacy/>}/>

                        <Route path="/ContactUs" element={<ContactUs/>}/>
                    </Routes>


                </Router>
            </Provider>
        </div>
    );
}

export default App;