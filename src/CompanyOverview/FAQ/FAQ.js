import Navbar from '../../NavBar/Navbarr';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './FAQ.css';
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import FAQ_en from './FAQ_en';
import { useLocation,useNavigate } from 'react-router-dom';
import i18n from '../../text/i18n';
import { useTranslation } from "react-i18next";
//https://www.npmjs.com/package/react-faq-component







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

let data = {
    title: "墓碑十問與十答",
    rows: [
        {
            title: <h4>1 問： 在家人訂購墓碑後，需要多少時間才能完成？</h4>,
            content:
            <h5>答： 如果訂購固定圖案的常規墓碑，只需要墓園批準後半年的時間就 可以完成。家族碑需要墓園批準後八個月以上的時間完成。</h5>,
        },
        {
            title: <h4>2 問： 那些尺寸，屬於常規碑？</h4>,
            content:
            <h5>答： 常規墓碑的尺寸，是對美東部份墓園而言。常規碑有單人碑和雙人 碑兩種： 單人碑：主碑 20 x 8 x 30 底座 24 x 12 x 8 雙人碑：主碑 36 x 8 x 24 底座 42 x 12 x 8</h5>,
        },
        {
            title: <h4>3 問： 永龍的墓碑是在那裡生產的呢？</h4>,
            content: <h5>答： 永龍的墓碑工廠設中國。大型碑，異型碑，精緻圖案雕刻，以及吉盅， 祭瓶，都是在中國生產。由於信息科技發達，現代化產業，只有運輸上 的距離，沒有管理上的距離。</h5>,
        },
        {
            title: <h4>4 問： 在美國做墓碑，常用美國石和印度石。中國出產的石料，質量有保障嗎？</h4>,
            content:<h5> 答： 在中國，有一句概括中國地理環境的老話：「七山二水一分田」。 這句話無疑告訴世人，中國是一個產石大國。實際上，中國出產的 許多石種，已經在美國墓碑市場流行。墓碑，絕對是一種耐久的， 而且永存的戶外產品，所以對墓碑加工就需要許多專門技術和處理 程序。永龍墓碑廠從美國、德國引進先進的生產設備，使永龍生產 的墓碑，達到國際標準。</h5>,
        },
        {
            title: <h4>5 問： 做墓碑，有多少種石種可供選擇？</h4>,
            content:<h5> 答： 石種分大理石和花崗石兩種，大理石性軟，花崗石堅硬，所以只有 花崗石才能做墓碑。市面上流行的三種花崗石是：灰石；紅石；黑 石。灰石價廉物美，有傳統觀瞻，是許多中國僑胞的選擇。也有許 多人喜愛紅石，印度紅是紅石中的首選。在黑石當中，印度的黑石 馳名世界，但是現在中國黑在美國已經大行其道。其他石種常見的 石種還有福建青，巴哈馬藍、貓眼石，等等。永龍的石碑展銷廳有多 種樣品展示，歡迎家人親臨參觀訂購。</h5>,
        },
        {
            title: <h4>6 問： 能不能在電話上詢價呢？</h4>,
            content:<h5> 答：永龍歡迎家人來電詢價，但是必須注意幾個問題： 一， 由於各個墓園的規定不同，家人詢價時，要提供墓園的資料。 二， 除常規墓碑由於固定尺寸，價位相對穩定外，其他所有墓碑， 家人必須提供墓碑尺寸和墓園的地段資料才能報價。因為墓 碑的尺寸影響價格，而每個墓園對不同地段，都有規定。沒 有墓園的有關資料，用想當然的尺寸詢價，可能白忙一場。 三， 永龍報價包括一條龍服務，從代辦墓園申請文件，到圖案設 計、製造、送貨和安裝；此報價不包括墓園的地基費和申請 費。</h5>,
        },
        {
            title: <h4>7 問： 安放墓碑時，能否擇日?</h4>,
            content:<h5> 答： 永龍提供選擇吉日安裝裝碑的服務，但家人需額外支付此服務費。</h5>,
        },
        {
            title: <h4>8 問： 在墓碑設計圖紙簽名確認之後，能不能再作改動？</h4>,
            content:<h5> 答： 圖紙一經家人簽名確認，即送交墓園審批，墓園批準後，工廠即按 圖生產。所以墓碑設計圖紙在家人簽名確認之後，是不能變更的。</h5>,
        },
        {
            title: <h4>9 問: 美國人也能做中文墓碑，永龍墓碑的優勢在哪裡？</h4>,
            content: <h5>答： 永龍墓碑有三大優勢： 一， 文化優勢。在製作當中，中文方塊字有其傳神的意境，這只 有中國人師傅才能掌握。 二， 溝通優勢。永龍是華人廠家不是中間商，家人有什麼要求， 可以跟我們直接溝通。 三， 門市優勢。永龍門市部設有具備規模的石碑展示廳，資料齊 全，方便家人上門訂購.</h5>,
        },
        {
            title: <h4>10 問： 永龍設計和製造的中文墓碑，意境和工藝自成一格。能否就這方面 的常識做一個介紹呢？</h4>,
            content: <h5>答： 華人在傳統上，認為墓碑是子孫後代的百年基業，草率了事會禍延 子孫。所以具備一些這方面的知識，是很重要的。做華人墓碑，要 注意如下問題。 一， 字體的選擇和處理。字體選得合適，刻在花崗石上，效果穩 建而深沉，經年累月，品味癒深。在刻制當中，電腦出樣往 往使字體微變，失真之處，令人惋惜。具備中文根基的師傅 可以在刻制中矯正電腦的盲點。 二， 圖案的選擇。選擇墓碑圖案，要生意盎然。如選樹必有葉桿 根莖。選竹樹竹報平安，節節高昇。此外，鬆鶴、醒獅、荷 蓮、玫瑰、冬梅、君蘭，都是上好圖案選擇。 三， 石刻工藝。石刻是一門專門的工藝，刻字手法有凹字，凸字， 花邊等。圖案處理有線雕，深雕。平面處理有磨光，砂面， 自然紋，等等。不同的設計，有不同的工藝運用。 四， 肖像。做肖像要注意選擇耐久的材料。永龍生產的瓷相，按 傳統古法燒製，永不退色。此外，永龍對黑石影雕肖像，也 有很高的造詣。</h5>,
        },

    ],
};


const data_eng = {



title: "墓碑十問與十答",
rows: [
    {
        title: <h4>1 Q: After the family orders the tombstones, how long does it take to complete? </h4>,
        content:
        <h5>A: If you order a regular tombstone with a fixed pattern, it only takes half a year after the cemetery’s approval to complete it. Family monuments take more than eight months to complete after cemetery approval."</h5>,
    },
    {
        title: <h4>2 Q: What are the dimensions that belong to the regular monument? </h4>,
        content:
        <h5>A: The size of a conventional tombstone is for cemeteries in the eastern United States. There are two types of conventional monuments: single monument and double monument: single monument: main monument 20 x 8 x 30 base 24 x 12 x 8 double monument: main monument 36 x 8 x 24 base 42 x 12 x 8"</h5>,
    },
    {
        title: <h4>3 Question: Yonglong Where are the tombstones produced?</h4>,
        content: <h5>A: Yonglong’s tombstone factory is located in China. Large-scale monuments, special-shaped monuments, exquisite pattern carvings, as well as auspicious cups and sacrificial bottles are all produced in China. Due to the development of information technology and modern industries, there is only a distance in transportation, but no distance in management.`</h5>,
    },
    {
        title: <h4>4 Q: To make tombstones in the United States, American stone and Indian stone are commonly used. Is the quality of stone produced in China guaranteed ?</h4>,
        content: <h5>A: In China, there is an old saying that sums up China’s geographical environment: “Seven mountains, two waters, one field”. This sentence undoubtedly tells the world that China is a big stone producing country. In fact, many stone types produced in China are already popular in the American tombstone market. Tombstones are definitely a durable and permanent outdoor product, so the processing of tombstones requires a lot of expertise and processing procedures. Yonglong Tombstone Factory introduced advanced production equipment from the United States and Germany to enable Yonglong to produce The tombstones meet international standards.`</h5>,
    },
    {
        title: <h4>5 Q: How many types of stone are there for tombstones?</h4>,
        content: <h5>Answer: There are two types of stone: marble and granite. Marble is soft and granite is hard, so only granite can be used as a tombstone. The three types of granite that are popular in the market are: grey stone; red stone; black stone. Grey stone is cheap and good quality, and has a traditional outlook, so it is the choice of many Chinese compatriots. There are also many people who love redstone, and Indian red is the first choice among redstones. Among blackstones, Indian blackstones are world-famous, but now Chinese blackstones have become popular in the United States. Other common stone species include Fujian blue, Bahamian blue, opal, and so on. Yonglong’s stele showroom has a variety of samples on display, and family members are welcome to visit and order.`</h5>,
    },
    {
        title: <h4>6 Q: Can I make an inquiry over the phone?</h4>,
        content: <h5>A: Yonglong welcomes family members to call for inquiries, but there are several issues that must be paid attention to: 1. Due to the different regulations of each cemetery, family members should provide the information of the cemetery when inquiring. 2. Except for conventional tombstones whose price is relatively stable due to their fixed size, for all other tombstones, family members must provide information on the size of the tombstone and the location of the cemetery before quoting. Because the size of the tombstone affects the price, and each cemetery has regulations for different lots. If there is no relevant information on the cemetery, inquiring with the size you take for granted may be a waste of time. 3. Yonglong’s quotation includes one-stop service, from agency cemetery application documents, to pattern design, manufacturing, delivery and installation; this quotation does not include the cemetery’s foundation fee and application fee.`</h5>,
    },
    {
        title: <h4>7 Q: Can I choose a date when the tombstone is placed?</h4>,
        content:<h5> A: Yonglong provides the service of choosing auspicious days to install monuments, but family members need to pay extra for this service.`</h5>,
    },
    {
        title: <h4>8 Q: After the signature of the tombstone design drawing is confirmed, can I make changes?</h4>,
        content:<h5> A: Once the drawings are signed and confirmed by the family, they will be sent to the cemetery for approval. After the cemetery approves, the factory will produce according to the drawings. Therefore, the tombstone design drawings cannot be changed after the signature and confirmation of the family members.`</h5>,
    },
    {
        title: <h4>9 Q: Americans can also make Chinese tombstones. What are the advantages of Yonglong tombstones?</h4>,
        content: <h5>Answer: Yonglong tombstone has three major advantages: First, cultural advantages. In the process of making, Chinese square characters have their expressive artistic conception, which can only be mastered by Chinese masters. Second, communication advantages. Yonglong is a Chinese manufacturer, not a middleman. If your family has any requirements, you can communicate with us directly. Third, store advantage. Yonglongmen City Department has a large-scale stone tablet exhibition hall with complete information, which is convenient for family members to order.`</h5>,
    },
    {
        title: <h4>10 Q: The Chinese tombstones designed and manufactured by Yonglong are unique in artistic conception and craftsmanship. Can you give an introduction to common sense in this regard ?</h4>,
        content: <h5>A: Traditionally, the Chinese believe that tombstones are the century-old heritage of future generations, and that carelessness will bring disaster to future generations. So it is very important to have some knowledge in this area. When making Chinese tombstones, pay attention to the following issues. One, font selection and processing. The font is selected appropriately, engraved on granite, and the effect is stable Built and deep, the taste deepens over the years. In the process of engraving, computer samples often change the font slightly, and the distortion is regrettable. Masters with Chinese roots can correct the blind spots of computers in the engraving process. Second, the choice of pattern. Choose a tombstone pattern and be full of business. If the tree is selected, it must have leaves, stems and rhizomes. Choose bamboo trees and bamboos to report safety and rise steadily. In addition, pine cranes, lions, lotus flowers, roses, winter plums, and monarch orchid are all good design choices. Third, the stone carving process. Stone carving is a specialized craft, and the lettering techniques include concave characters, convex characters, lace and so on. Pattern processing line engraving, deep engraving. The surface treatment is polished, sanded, natural grain, and so on. Different designs have different process applications. Fourth, portraits. When making portraits, pay attention to choosing durable materials. The porcelain phase produced by Yonglong is fired according to the traditional ancient method and will never fade. In addition, Yonglong also has high attainments in black stone shadow sculpture portraits.`</h5>,
    },

],
};


const FAQ = () => {
    const {t} = useTranslation();
    let navigate = useNavigate();

        // data.title = {t('FAQ.title')}
        // console.log(data.title);

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
            {/* {i18n.language == 'en' ?
                <Faq 
                data={data_eng}
                styles={styles}
                config={config}
                 />
                 :
                 <Faq 
                 data={data_chn}
                 styles={styles}
                 config={config}
                  />
            } */}
            </div>
            <Footer/>
        </div>
    );
}

export default FAQ;