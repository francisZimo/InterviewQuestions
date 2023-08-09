const fs = require('fs');

// const inputImagePath = './logo.png';
const outputBinaryFilePath = './temp.txt';
const outputNewImagePath = './outpath/new2.jpg';

// 2. 读取本地的二进制文件并生成新的图片
fs.readFile(outputBinaryFilePath, (err, newData) => {
    if (err) {
        console.error('Error reading the binary file:', err);
        return;
    }

    fs.writeFile(outputNewImagePath, newData, 'binary', (err) => {
        if (err) {
            console.error('Error writing the new image file:', err);
            return;
        }

        console.log('New image file was successfully generated and saved!');
    });
});