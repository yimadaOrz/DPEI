
    import img1 from './photos/AA-1181.jpg';
import img2 from './photos/AA-1286.jpg';
import img3 from './photos/AA-1655.jpg';
import img4 from './photos/AA-1788.jpg';
import img5 from './photos/AA-1799.jpg';
import img6 from './photos/AA-1850.jpg';
import img7 from './photos/AA-1880.jpg';
import img8 from './photos/AA-1886.jpg';
import img9 from './photos/AA-2038.jpg';
import img10 from './photos/AA-2047.jpg';
import img11 from './photos/AA-207.jpg';
import img12 from './photos/AA-242.jpg';
import img13 from './photos/AF-080.jpg';
import img14 from './photos/AF-1040.jpg';
import img15 from './photos/AF-107.jpg';
import img16 from './photos/AF-172.jpg';
import img17 from './photos/AF-195.jpg';
import img18 from './photos/AF-292.jpg';
import img19 from './photos/AF-899.jpg';
import img20 from './photos/AF-945.jpg';
import img21 from './photos/AF-976.jpg';
import img22 from './photos/AM-033.jpg';
import img23 from './photos/AM-043.jpg';
import img24 from './photos/AM-078.jpg';
import img25 from './photos/AM-084.jpg';
import img26 from './photos/AM-097.jpg';
import img27 from './photos/ET2191.jpg';
import img28 from './photos/ET3302.jpg';
import img29 from './photos/ET3396.jpg';
import img30 from './photos/ET3605-B.jpg';
import img31 from './photos/ET3750.jpg';
import img32 from './photos/ET3793.jpg';
import img33 from './photos/ET3797.jpg';
import img34 from './photos/ET3934.jpg';
import img35 from './photos/ET3957.jpg';
import img36 from './photos/SN-0738.jpg';
import img37 from './photos/SN-1074.jpg';

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
{ src: img32, width: 0, height: 0},
{ src: img33, width: 0, height: 0},
{ src: img34, width: 0, height: 0},
{ src: img35, width: 0, height: 0},
{ src: img36, width: 0, height: 0},
// { src: img37, width: 0, height: 0}
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