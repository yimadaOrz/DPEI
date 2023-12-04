import Navbar from '../../NavBar/Navbarr';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './FAQ.css';
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";


//https://www.npmjs.com/package/react-faq-component
const data = {

    title: "Ten Questions and Answers on Monuments",
    rows: [
        {
            title: <h4>1 Q: After the family orders the tombstones, how long does it take to complete? </h4>,
            content:
            <h5>A: If you order a regular tombstone with a fixed pattern, it only takes half a year after the cemetery’s approval to complete it. Family monuments take more than eight months to complete after cemetery approval.</h5>,
        },
        {
            title: <h4>2 Q: What are the dimensions that belong to the regular monument? </h4>,
            content:
            <h5>A: The size of a conventional tombstone is for cemeteries in the eastern United States. There are two types of conventional monuments: single monument and double monument: single monument: main monument 20 x 8 x 30 base 24 x 12 x 8 double monument: main monument 36 x 8 x 24 base 42 x 12 x 8</h5>,
        },
        {
            title: <h4>3 Question: Yonglong Where are the tombstones produced?</h4>,
            content: <h5>A: Yonglong’s tombstone factory is located in China. Large-scale monuments, special-shaped monuments, exquisite pattern carvings, as well as auspicious cups and sacrificial bottles are all produced in China. Due to the development of information technology and modern industries, there is only a distance in transportation, but no distance in management.</h5>,
        },
        {
            title: <h4>4 Q: To make tombstones in the United States, American stone and Indian stone are commonly used. Is the quality of stone produced in China guaranteed ?</h4>,
            content: <h5>A: In China, there is an old saying that sums up China’s geographical environment: “Seven mountains, two waters, one field”. This sentence undoubtedly tells the world that China is a big stone producing country. In fact, many stone types produced in China are already popular in the American tombstone market. Tombstones are definitely a durable and permanent outdoor product, so the processing of tombstones requires a lot of expertise and processing procedures. Yonglong Tombstone Factory introduced advanced production equipment from the United States and Germany to enable Yonglong to produce The tombstones meet international standards.</h5>,
        },
        {
            title: <h4>5 Q: How many types of stone are there for tombstones?</h4>,
            content: <h5>Answer: There are two types of stone: marble and granite. Marble is soft and granite is hard, so only granite can be used as a tombstone. The three types of granite that are popular in the market are: grey stone; red stone; black stone. Grey stone is cheap and good quality, and has a traditional outlook, so it is the choice of many Chinese compatriots. There are also many people who love redstone, and Indian red is the first choice among redstones. Among blackstones, Indian blackstones are world-famous, but now Chinese blackstones have become popular in the United States. Other common stone species include Fujian blue, Bahamian blue, opal, and so on. Yonglong’s stele showroom has a variety of samples on display, and family members are welcome to visit and order.</h5>,
        },
        {
            title: <h4>6 Q: Can I make an inquiry over the phone?</h4>,
            content: <h5>A: Yonglong welcomes family members to call for inquiries, but there are several issues that must be paid attention to: 1. Due to the different regulations of each cemetery, family members should provide the information of the cemetery when inquiring. 2. Except for conventional tombstones whose price is relatively stable due to their fixed size, for all other tombstones, family members must provide information on the size of the tombstone and the location of the cemetery before quoting. Because the size of the tombstone affects the price, and each cemetery has regulations for different lots. If there is no relevant information on the cemetery, inquiring with the size you take for granted may be a waste of time. 3. Yonglong’s quotation includes one-stop service, from agency cemetery application documents, to pattern design, manufacturing, delivery and installation; this quotation does not include the cemetery’s foundation fee and application fee.</h5>,
        },
        {
            title: <h4>7 Q: Can I choose a date when the tombstone is placed?</h4>,
            content:<h5>A: Yonglong provides the service of choosing auspicious days to install monuments, but family members need to pay extra for this service.</h5>,
        },
        {
            title: <h4>8 Q: After the signature of the tombstone design drawing is confirmed, can I make changes?</h4>,
            content:<h5> A: Once the drawings are signed and confirmed by the family, they will be sent to the cemetery for approval. After the cemetery approves, the factory will produce according to the drawings. Therefore, the tombstone design drawings cannot be changed after the signature and confirmation of the family members.</h5>,
        },
        {
            title: <h4>9 Q: Americans can also make Chinese tombstones. What are the advantages of Yonglong tombstones?</h4>,
            content: <h5>Answer: Yonglong tombstone has three major advantages: First, cultural advantages. In the process of making, Chinese square characters have their expressive artistic conception, which can only be mastered by Chinese masters. Second, communication advantages. Yonglong is a Chinese manufacturer, not a middleman. If your family has any requirements, you can communicate with us directly. Third, store advantage. Yonglongmen City Department has a large-scale stone tablet exhibition hall with complete information, which is convenient for family members to order.</h5>,
        },
        {
            title: <h4>10 Q: The Chinese tombstones designed and manufactured by Yonglong are unique in artistic conception and craftsmanship. Can you give an introduction to common sense in this regard ?</h4>,
            content: <h5>A: Traditionally, the Chinese believe that tombstones are the century-old heritage of future generations, and that carelessness will bring disaster to future generations. So it is very important to have some knowledge in this area. When making Chinese tombstones, pay attention to the following issues. One, font selection and processing. The font is selected appropriately, engraved on granite, and the effect is stable Built and deep, the taste deepens over the years. In the process of engraving, computer samples often change the font slightly, and the distortion is regrettable. Masters with Chinese roots can correct the blind spots of computers in the engraving process. Second, the choice of pattern. Choose a tombstone pattern and be full of business. If the tree is selected, it must have leaves, stems and rhizomes. Choose bamboo trees and bamboos to report safety and rise steadily. In addition, pine cranes, lions, lotus flowers, roses, winter plums, and monarch orchid are all good design choices. Third, the stone carving process. Stone carving is a specialized craft, and the lettering techniques include concave characters, convex characters, lace and so on. Pattern processing line engraving, deep engraving. The surface treatment is polished, sanded, natural grain, and so on. Different designs have different process applications. Fourth, portraits. When making portraits, pay attention to choosing durable materials. The porcelain phase produced by Yonglong is fired according to the traditional ancient method and will never fade. In addition, Yonglong also has high attainments in black stone shadow sculpture portraits.</h5>,
        },
    
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "red",
    titleTextSize:"50px",
    
   
    
};

const config = {
    animate: true,
    expandIcon: "+",
    collapseIcon: "-",
    tabFocus: true
    
};



const FAQ_en = () => {
    return(
        <div>
            <Header/>
            <Navbar/>
            <div className='faq-style-wrapper'>
                <Faq 
                
                data={data}
                styles={styles}
                config={config}
                 />
            </div>
            <Footer/>
        </div>
    );
}

export default FAQ_en;