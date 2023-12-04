import './SlantMarkers_en.css';

import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import { photos } from './photo';
import Carousel, { Modal, ModalGateway } from "react-images";
import Navbarr from '../../NavBar/Navbarr';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Paginations from '../../Paginations/Paginations';
import {useTranslation} from "react-i18next";
const axios = require('axios').default;

 //http://neptunian.github.io/react-photo-gallery/examples/basic-rows.html
const SlantMarkers_en = () => {
    const  {t} = useTranslation();

  // useEffect(()=>{
  //   axios.get('/单人碑')
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });
  // },[])

  const [img, setImg] = useState([]);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(9);
      const [totalImages, setTotalImages] = useState(photos.length);
  // const [currentPhotos, setCurrentPhotos] = useState(17);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };



    //Get current posts
    const indexOfLastPost = currentPage * imagesPerPage;
    const indexOfFirstPost = indexOfLastPost - imagesPerPage;
    const currentPhotos = photos.slice(indexOfFirstPost, indexOfLastPost);
   


    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return(
      
    <div >
      <Header/>
      <Navbarr/>
        <h1>{t("navbar.item3.subitem2")}</h1>

        <div className="gallery_container grow img">
     <Gallery
      photos={currentPhotos}
      margin={30}
      limitNodeSearch={3}
      onClick={openLightbox} 
     />
     <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </div>

      <Paginations 
        postsPerPage={imagesPerPage} 
        totalPosts = {totalImages}
        paginate ={paginate}
        currentPage = {currentPage}
      />         

      <Footer/>
   </div>
);
    }



export default SlantMarkers_en;