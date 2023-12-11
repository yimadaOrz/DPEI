
    import img1 from './photos/AA-1866.jpg';
import img2 from './photos/AF-923.jpg';
import img3 from './photos/AM-254.jpg';
import img4 from './photos/ET1051.jpg';
import img5 from './photos/ET1497.jpg';
import img6 from './photos/ET1645.jpg';
import img7 from './photos/ET1990.jpg';
import img8 from './photos/ET2636.jpg';
import img9 from './photos/ET2835.jpg';
import img10 from './photos/ET3631.jpg';
import img11 from './photos/ET3846.jpg';
import img12 from './photos/ET3867.jpg';
import img13 from './photos/ET3875.jpg';
import img14 from './photos/ET3886.jpg';
import img15 from './photos/ET3935.jpg';
import img16 from './photos/ET3937.jpg';
import img17 from './photos/ET4017.jpg';
import img18 from './photos/ET926.jpg';
import img19 from './photos/SN-0274.jpg';
import img20 from './photos/SN-0453.jpg';
import img21 from './photos/SN-0458.jpg';
import img22 from './photos/SN-0599.jpg';
import img23 from './photos/SN-0617.jpg';
import img24 from './photos/SN-0873.jpg';
import img25 from './photos/SN-0894.jpg';
import img26 from './photos/SN-1021.jpg';
import img27 from './photos/SN-1122.jpg';
import img28 from './photos/VC-013.jpg';
import img29 from './photos/VC-246.jpg';
import img30 from './photos/WA-022.jpg';

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
{ src: img30, width: 0, height: 0}
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