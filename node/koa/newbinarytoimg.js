const fs = require('fs');

const inputImagePath = './logo.png';
const outputBinaryFilePath = './outpath/demo.txt';
const outputNewImagePath = './outpath/new1.jpg';

// 1. 将图片转换为二进制文件并保存到本地
fs.readFile(inputImagePath, (err, data) => {
    if (err) {
        console.error('Error reading the input image:', err);
        return;
    }

    fs.writeFile(outputBinaryFilePath, data, 'binary', (err) => {
        if (err) {
            console.error('Error writing the binary file:', err);
            return;
        }

        console.log('Binary file was successfully generated and saved!');

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
    });
});