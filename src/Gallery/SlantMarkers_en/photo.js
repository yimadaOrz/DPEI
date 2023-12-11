
    import img1 from './photos/AA-1862.jpg';
import img2 from './photos/AA-1951.jpg';
import img3 from './photos/AA-1953.jpg';
import img4 from './photos/AA-1956.jpg';
import img5 from './photos/AA-1992.jpg';
import img6 from './photos/AA-698.jpg';
import img7 from './photos/AA-743.jpg';
import img8 from './photos/AM-041.jpg';
import img9 from './photos/AM-142.jpg';
import img10 from './photos/AM-248.jpg';
import img11 from './photos/AM-311.jpg';
import img12 from './photos/ET1863.jpg';
import img13 from './photos/ET1892.jpg';
import img14 from './photos/ET2375.jpg';
import img15 from './photos/ET2409.jpg';
import img16 from './photos/ET2444.jpg';
import img17 from './photos/ET3002.jpg';
import img18 from './photos/ET3067.jpg';
import img19 from './photos/ET3788.jpg';
import img20 from './photos/PTX2311.jpg';
import img21 from './photos/SN-0350.jpg';
import img22 from './photos/SN-0764.jpg';
import img23 from './photos/SN-0822.jpg';
import img24 from './photos/SN-1132.jpg';
import img25 from './photos/SN-1157.jpg';
import img26 from './photos/SN-1170.jpg';
import img27 from './photos/SN-1221.jpg';
import img28 from './photos/SN-1247.jpg';
import img29 from './photos/YL1044.jpg';
import img30 from './photos/YL1082.jpg';
import img31 from './photos/YL1381.jpg';
import img32 from './photos/YL1791.jpg';
    // import img34 from "../SlantMarkers/photos/Y1105 24x18.jpg";
    // import img35 from "../SlantMarkers/photos/Y1222 18x10.jpg";
    // import img36 from "../SlantMarkers/photos/Y1272 48x18.jpg";
    // import img37 from "../SlantMarkers/photos/Y1543 24x12.jpg";
    // import img38 from "../SlantMarkers/photos/Y1734 24x12.jpg";
    // import img39 from "../SlantMarkers/photos/Y1893 25x16.jpg";
    // import img40 from "../SlantMarkers/photos/YL1008.jpg";
    // import img41 from "../SlantMarkers/photos/YL1196.jpg";
    // import img42 from "../SlantMarkers/photos/YL1266.JPG";
    // import img43 from "../SlantMarkers/photos/YL1394.JPG";
    // import img44 from "../SlantMarkers/photos/YL1602.JPG";
    // import img45 from "../SlantMarkers/photos/YL1630.JPG";
    // import img46 from "../SlantMarkers/photos/YL920.JPG";
    // import img47 from "../SlantMarkers/photos/YL992.jpg";
    const maxWidth = 400;
    const maxHeight = 400;

    export const photos = [
        { src: img1, width: 0, height: 0},
        { src: img2, width: 0, height: 0},
        { src: img3, width: 0, height: 0},
        { src: img4, width: 0, height: 0},
        { src: img5, width: 0, height: 0},
        { src: img6, width: 0, height: 0},
        { src: img7, width: 0, height: 0},
        { src: img8, width: 0, height: 0},
        { src: img9, width: 0, height: 0},
        { src: img10, width: 0, height: 0},
        { src: img11, width: 0, height: 0},
        { src: img12, width: 0, height: 0},
        { src: img13, width: 0, height: 0},
        { src: img14, width: 0, height: 0},
        { src: img15, width: 0, height: 0},
        { src: img16, width: 0, height: 0},
        { src: img17, width: 0, height: 0},
        { src: img18, width: 0, height: 0},
        { src: img19, width: 0, height: 0},
        { src: img20, width: 0, height: 0},
        { src: img21, width: 0, height: 0},
        { src: img22, width: 0, height: 0},
        { src: img23, width: 0, height: 0},
        { src: img24, width: 0, height: 0},
        { src: img25, width: 0, height: 0},
        { src: img26, width: 0, height: 0},
        { src: img27, width: 0, height: 0},
        { src: img28, width: 0, height: 0},
        { src: img29, width: 0, height: 0},
        { src: img30, width: 0, height: 0},
        { src: img31, width: 0, height: 0},
        { src: img32, width: 0, height: 0}
    ];
    const calculateDimensions = (img, index) => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;

        // 在保持纵横比的同时计算新的宽度和高度
        if (img.naturalWidth > img.naturalHeight) {
            photos[index].width = Math.min(maxWidth, img.naturalWidth);
            photos[index].height = photos[index].width / aspectRatio;
        } else {
            photos[index].height = Math.min(maxHeight, img.naturalHeight);
            photos[index].width = photos[index].height * aspectRatio;
        }

        // 在最后一页调整尺寸
        // const imagesOnLastRow = (photos.length - index - 1) % 3; // 计算最后一行的图片数量
        // if (imagesOnLastRow < 3) { // 如果最后一行图片少于3张，则调整尺寸
        //     const maxLastPageWidth = maxWidth / 3; // 设置为每行1/3的宽度
        //     const maxLastPageHeight = maxHeight; // 保持最大高度不变
        //     photos[index].width = Math.min(photos[index].width, maxLastPageWidth);
        //     photos[index].height = Math.min(photos[index].height, maxLastPageHeight);
        // }

        // 确保尺寸在指定的限制内
        photos[index].width = Math.min(photos[index].width, maxWidth);
        photos[index].height = Math.min(photos[index].height, maxHeight);

        //console.log(photos[index].height)
        //console.log(photos[index].width);
    };



    // 计算每个图像新宽度和高度
    photos.forEach((photo, index) => {
        const img = new Image();
        img.src = photo.src;

        img.onload = () => {
            calculateDimensions(img, index);
            //console.log(`Dimensions calculated for image ${index + 1}`);
        };
    });