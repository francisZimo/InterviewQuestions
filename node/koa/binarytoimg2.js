const fs = require('fs');

// 读取二进制文件
fs.readFile('./new1.txt', (err, data) => {
    if (err) {
        console.error('Error reading the binary file:', err);
        return;
    }

    // 写入图片文件

    fs.writeFile('./outpath/demo1.jpg', data, 'binary', (err) => {
        if (err) {
            console.error('Error writing the image file:', err);
            return;
        }

        console.log('Image file was successfully generated and saved!');
    });
});