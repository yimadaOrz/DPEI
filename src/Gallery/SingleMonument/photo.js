
    import img1 from './photos/P2129 20x30.JPG';
import img2 from './photos/P2319 20x30.JPG';
import img3 from './photos/P2339 20x30.JPG';
import img4 from './photos/P2376 20x30.JPG';
import img5 from './photos/P2426 20x30.JPG';
import img6 from './photos/P2454 26x36.JPG';
import img7 from './photos/P2498 20x30.JPG';
import img8 from './photos/P2532 20x30.JPG';
import img9 from './photos/P2703 20x30.JPG';
import img10 from './photos/P3092 20x26.JPG';
import img11 from './photos/P745 20x30.JPG';
import img12 from './photos/Y1008 26x34.JPG';
import img13 from './photos/Y1266 22x30.JPG';
import img14 from './photos/Y1394 26x36.JPG';
import img15 from './photos/Y1403 20x32.JPG';
import img16 from './photos/Y1432 20x30.JPG';
import img17 from './photos/Y1521 20x30.JPG';
import img18 from './photos/Y1602 20x32.JPG';
import img19 from './photos/Y1630 20x30.JPG';
import img20 from './photos/Y1675 20x26.JPG';
import img21 from './photos/Y1729 20x26.JPG';
import img22 from './photos/Y1844 20x30.jpg';
import img23 from './photos/Y920 20x30.JPG';
import img24 from './photos/Y992 22x34.JPG';

        const maxWidth = 400;
    const maxHeight = 400;

    export const photos = [
      { src: img1, width: 0, height: 0 },
{ src: img2, width: 0, height: 0 },
{ src: img3, width: 0, height: 0 },
{ src: img4, width: 0, height: 0 },
{ src: img5, width: 0, height: 0 },
{ src: img6, width: 0, height: 0 },
{ src: img7, width: 0, height: 0 },
{ src: img8, width: 0, height: 0 },
{ src: img9, width: 0, height: 0 },
{ src: img10, width: 0, height: 0 },
{ src: img11, width: 0, height: 0 },
{ src: img12, width: 0, height: 0 },
{ src: img13, width: 0, height: 0 },
{ src: img14, width: 0, height: 0 },
{ src: img15, width: 0, height: 0 },
{ src: img16, width: 0, height: 0 },
{ src: img17, width: 0, height: 0 },
{ src: img18, width: 0, height: 0 },
{ src: img19, width: 0, height: 0 },
{ src: img20, width: 0, height: 0 },
{ src: img21, width: 0, height: 0 },
{ src: img22, width: 0, height: 0 },
{ src: img23, width: 0, height: 0 },
{ src: img24, width: 0, height: 0 }
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