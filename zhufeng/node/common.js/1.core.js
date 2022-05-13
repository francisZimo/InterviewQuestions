const fs = require('fs');
const vm=require('vm')
const path=require('path')
// 相对路径
console.log(path.join('a','b','..'));
// 绝对路径 resolve 不会支持 '/' 会解析成跟路径
console.log(path.resolve('a','b','c','/'))
// 扩展名 
console.log(path.extname('1.js'))
console.log(path.dirname(__dirname))

// 文件是否存在
const flag=fs.existsSync(path.resolve(__dirname,'test1.js'))
console.log(flag)

// 虚拟机模块
let a=1
console.log(a,'==a')
vm.runInThisContext('a=100') // 沙箱 独立环境
console.log(a)

// new function