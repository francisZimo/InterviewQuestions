const { execFile ,exec} = require('child_process');
const path = require('path');

const pathToBat = path.resolve(__dirname,'./bat.cmd');
console.log(pathToBat,'==path')
exec(pathToBat,[],(err,stdout)=>{
    console.log(err,'==err')
    console.log(stdout.toString()) 
})