
const moduleA=require('./a')
console.log(moduleA.counter)
moduleA.add()
console.log(moduleA.counter)
setTimeout(()=>{
  console.log(moduleA.counter)
},3000)
