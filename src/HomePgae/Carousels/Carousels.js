import React, { useRef, useState } from 'react';
import './Carousel.css';
import InfiniteCarousel from 'react-leaf-carousel';
import img1 from '../Carousels/photos/SLQ005 78x32.jpg';
import img2 from '../Carousels/photos/Y296 162x46.jpg';
import img4 from '../Carousels/photos/Y1224 90x38.jpg';
import img5 from '../Carousels/photos/Y1371 138x42.jpg';
import img6 from '../Carousels/photos/Y1431 126x38.jpg';
import img7 from '../Carousels/photos/Y1616 84x34.jpg';
import img8 from '../Carousels/photos/Y1617 116x38.jpg';
import img9 from '../Carousels/photos/Y1720 102x34.jpg';
import img10 from '../Carousels/photos/Y1730 84x34.jpg';
import img11 from '../Carousels/photos/Y1775 90x32.jpg';
// import img12 from '../Carousels/photos/Y838 36x30.jpg';

const DraggableImage = ({ src, className }) => {
    const imageRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX - imageRef.current.offsetLeft);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const newLeft = e.clientX - startX;
            imageRef.current.style.left = `${newLeft}px`;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <img
            ref={imageRef}
            alt=''
            src={src}
            className={className}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        />
    );
};

const Carousels = () => {
    return (
        <div className = {'carousel_container'} style={{ marginTop: '30px', position: 'relative', overflow: 'hidden', width: '70%', margin: 'auto', textAlign: 'center' }}>
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                ]}
                cycleInterval={5000}
                arrows={true}
                pauseOnHover={true}
                autoCycle={true}
                slidesToScroll={1}
                slidesToShow={4}
                scrollOnDevice={true}
                lazyLoad={false}
                swipe={true}
                animationDuration={1500}
            >
                <DraggableImage src={img1} className="img_size" />
                <DraggableImage src={img2} className="img_size" />
                <DraggableImage src={img4} className="img_size" />
                <DraggableImage src={img5} className="img_size" />
                <DraggableImage src={img6} className="img_size" />
                <DraggableImage src={img7} className="img_size" />
                <DraggableImage src={img8} className="img_size" />
                <DraggableImage src={img9} className="img_size" />
                <DraggableImage src={img10} className="img_size" />
                <DraggableImage src={img11} className="img_size" />
            </InfiniteCarousel>
        </div>
    );
};

export default Carousels;
