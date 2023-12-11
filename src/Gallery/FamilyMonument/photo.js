
    import img1 from './photos/P1543 84x34.jpg';
import img2 from './photos/P809 61x42.jpg';
import img3 from './photos/P828 78x24.jpg';
import img4 from './photos/SLQ005 78x32.jpg';
import img5 from './photos/Y1092 138x46.jpg';
import img6 from './photos/Y1224 90x38.jpg';
import img7 from './photos/Y1280 78x38.jpg';
import img8 from './photos/Y1371138x42.jpg';
import img9 from './photos/Y1431126x38.jpg';
import img10 from './photos/Y1466 78x32.jpg';
import img11 from './photos/Y1486 66x34.jpg';
import img12 from './photos/Y1490 72x37.jpg';
import img13 from './photos/Y151 162x44.jpg';
import img14 from './photos/Y1599 60x36.jpg';
import img15 from './photos/Y1615 78x34.jpg';
import img16 from './photos/Y1616 84x34.jpg';
import img17 from './photos/Y1617 116x38.jpg';
import img18 from './photos/Y1709 66x34.jpg';
import img19 from './photos/Y1720 102x34.jpg';
import img20 from './photos/Y1730 84x34.jpg';
import img21 from './photos/Y1735 102x34.jpg';
import img22 from './photos/Y1775 90x32.jpg';
import img23 from './photos/Y1827 66x32.jpg';
import img24 from './photos/Y296 162x46.jpg';
import img25 from './photos/Y322 78x38 .JPG';
import img26 from './photos/Y582 120x42 .JPG';
import img27 from './photos/Y742 120x38.jpg';
import img28 from './photos/Y823 60x30.jpg';
import img29 from './photos/Y841 78x38.jpg';
import img30 from './photos/Y908 135x57.5.jpg';
import img31 from './photos/Y941 66x38.jpg';

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
{ src: img31, width: 0, height: 0}
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