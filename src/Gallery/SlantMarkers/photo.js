
    import img1 from './photos/IMG_1260.JPG';
import img2 from './photos/IMG_1271.JPG';
import img3 from './photos/IMG_1316.JPG';
import img4 from './photos/IMG_1457.JPG';
import img5 from './photos/IMG_1749.JPG';
import img6 from './photos/IMG_1796.JPG';
import img7 from './photos/IMG_2159.JPG';
import img8 from './photos/IMG_2196.JPG';
import img9 from './photos/IMG_2210.JPG';
import img10 from './photos/IMG_2431.JPG';
import img11 from './photos/IMG_2464.JPG';
import img12 from './photos/IMG_2494.JPG';
import img13 from './photos/IMG_2512.JPG';
import img14 from './photos/IMG_2731.JPG';
import img15 from './photos/IMG_3022.JPG';
import img16 from './photos/IMG_3085.JPG';
import img17 from './photos/P1238 24x18.jpg';
import img18 from './photos/P1299 24x12.jpg';
import img19 from './photos/P1605 24x14.jpg';
import img20 from './photos/P1830 24x16.jpg';
import img21 from './photos/P1853 48x12.jpg';
import img22 from './photos/P2016 24x12.jpg';
import img23 from './photos/P2068 24x14.jpg';
import img24 from './photos/P2383 24x18.jpg';
import img25 from './photos/P2494 24x12.jpg';
import img26 from './photos/P2608 48x12.jpg';
import img27 from './photos/P2651 24x16.jpg';
import img28 from './photos/P2968 24x14.jpg';
import img29 from './photos/P3035 48x18.jpg';
import img30 from './photos/P772 24x18.jpg';
import img31 from './photos/P787 48x18.jpg';
import img32 from './photos/PTX745.jpg';
import img34 from './photos/Y1105 24x18.jpg';
import img35 from './photos/Y1222 18x10.jpg';
import img36 from './photos/Y1272 48x18.jpg';
import img37 from './photos/Y1543 24x12.jpg';
import img38 from './photos/Y1734 24x12.jpg';
import img39 from './photos/Y1893 25x16.jpg';
import img40 from './photos/YL1008.jpg';
import img41 from './photos/YL1196.jpg';
import img42 from './photos/YL1266.JPG';
import img43 from './photos/YL1394.JPG';
import img44 from './photos/YL1602.JPG';
import img45 from './photos/YL1630.JPG';
import img46 from './photos/YL920.JPG';
import img47 from './photos/YL992.jpg';

    const maxWidth = 300;
    const maxHeight = 300;
    const maxLastPageWidth = 100; // Adjust this value for the maximum width on the last page
    const maxLastPageHeight = 100; // Adjust this value for the maximum height on the last page

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
{ src: img24, width: 0, height: 0 },
{ src: img25, width: 0, height: 0 },
{ src: img26, width: 0, height: 0 },
{ src: img27, width: 0, height: 0 },
{ src: img28, width: 0, height: 0 },
{ src: img29, width: 0, height: 0 },
{ src: img30, width: 0, height: 0 },
{ src: img31, width: 0, height: 0 },
{ src: img32, width: 0, height: 0 },
{ src: img34, width: 0, height: 0 },
{ src: img35, width: 0, height: 0 },
{ src: img36, width: 0, height: 0 },
{ src: img37, width: 0, height: 0 },
{ src: img38, width: 0, height: 0 },
{ src: img39, width: 0, height: 0 },
{ src: img40, width: 0, height: 0 },
{ src: img41, width: 0, height: 0 },
{ src: img42, width: 0, height: 0 },
{ src: img43, width: 0, height: 0 },
{ src: img44, width: 0, height: 0 },
{ src: img45, width: 0, height: 0 },
{ src: img46, width: 0, height: 0 },
{ src: img47, width: 0, height: 0 }
    ];

    // 最后一页的宽度和高度

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

        console.log(photos[index].height)
        console.log(photos[index].width);
    };



    // 计算每个图像新宽度和高度
    photos.forEach((photo, index) => {
        const img = new Image();
        img.src = photo.src;

        img.onload = () => {
            calculateDimensions(img, index);
            console.log(`Dimensions calculated for image ${index + 1}`);
        };
    });


