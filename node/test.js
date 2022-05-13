const path =require('path')

const t1=Buffer.from('我饿')
console.log(t1) 

let s=path.join(__dirname,'name.json')
console.log(s)
let s1=path.resolve(__dirname,'name.json')
console.log(s1)
let s2=path.join('./','name.json','a')
console.log(s2)
let s3=path.resolve('./','name.json','a')
console.log(s3)