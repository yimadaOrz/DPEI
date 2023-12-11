
    import img1 from './photos/BZ01-LSM.jpg';
import img2 from './photos/CS03A-HBS.jpg';
import img3 from './photos/CS03A-HPH.jpg';
import img4 from './photos/CS03B-HMD.jpg';
import img5 from './photos/CS03B-LMD.jpg';
import img6 from './photos/CS04-HH.jpg';
import img7 from './photos/CS04-HPH.jpg';
import img8 from './photos/CS08A-FCL.jpg';
import img9 from './photos/CS08B-BMD.jpg';
import img10 from './photos/J02-NFY.jpg';
import img11 from './photos/J06-NF.jpg';
import img12 from './photos/J08-白玉方盅.jpg';
import img13 from './photos/J08-青玉方盅.jpg';
import img14 from './photos/R18-YBS.jpg';
import img15 from './photos/S05-SXH松香黄.jpg';
import img16 from './photos/S05-ZZH珍珠灰.jpg';
import img17 from './photos/S10-SXH.jpg';
import img18 from './photos/S11-YHS.jpg';
import img19 from './photos/S14-HBG.jpg';
import img20 from './photos/S14A-GXB.jpg';
import img21 from './photos/S14B-CYY.jpg';
import img22 from './photos/S14B-DHL.jpg';
import img23 from './photos/S15-MNH.jpg';
import img24 from './photos/S18-SXH.jpg';
import img25 from './photos/S18-YBS.jpg';
import img26 from './photos/S26-JHH.jpg';
import img27 from './photos/ST1-1-MHN.jpg';

    const maxWidth = 400;
    const maxHeight = 450;
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

        ////console.log(photos[index].height)
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