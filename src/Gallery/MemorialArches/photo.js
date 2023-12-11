
    import img1 from './photos/P021 144x144x98.jpg';
import img2 from './photos/P030 108x118.jpg';
import img3 from './photos/Y059 60x34.jpg';
import img4 from './photos/Y246 168x162.jpg';
import img5 from './photos/Y279 234x174.jpg';
import img6 from './photos/Y347 139x152.jpg';
import img7 from './photos/Y554 42x32.jpg';

        const maxWidth = 400;
    const maxHeight = 400;

    export const photos = [
      { src: img1, width: 0, height: 0},
{ src: img2, width: 0, height: 0},
{ src: img3, width: 0, height: 0},
{ src: img4, width: 0, height: 0},
{ src: img5, width: 0, height: 0},
{ src: img6, width: 0, height: 0},
{ src: img7, width: 0, height: 0}
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
        const imagesOnLastRow = (photos.length - index - 1) % 3; // 计算最后一行的图片数量
        if (imagesOnLastRow < 3) { // 如果最后一行图片少于3张，则调整尺寸
            const maxLastPageWidth = maxWidth / 3; // 设置为每行1/3的宽度
            const maxLastPageHeight = maxHeight; // 保持最大高度不变
            photos[index].width = Math.min(photos[index].width, maxLastPageWidth);
            photos[index].height = Math.min(photos[index].height, maxLastPageHeight);
        }

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