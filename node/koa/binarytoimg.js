// const fs = require('fs');

// // 读取二进制文件
// fs.readFile('./mock.txt', (err, data) => {
//     if (err) {
//         console.error('Error reading the binary file:', err);
//         return;
//     }

//     // 写入图片文件

//     fs.writeFile('./outpath/demo1.jpg', data, 'binary', (err) => {
//         if (err) {
//             console.error('Error writing the image file:', err);
//             return;
//         }

//         console.log('Image file was successfully generated and saved!');
//     });
// });

const fs = require('fs');

const inputFilePath = './bin.txt';
const outputFilePath = './outpath/image.jpg';

const readStream = fs.createReadStream(inputFilePath);
const writeStream = fs.createWriteStream(outputFilePath);

readStream.on('error', (err) => {
    console.error('Error reading the binary file:', err);
});

writeStream.on('error', (err) => {
    console.error('Error writing the image file:', err);
});

writeStream.on('finish', () => {
    console.log('Image file was successfully generated and saved!');
});

readStream.pipe(writeStream);