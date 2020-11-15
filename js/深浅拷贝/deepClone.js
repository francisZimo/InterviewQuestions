// function deepClone(origin){
//   // origin 是null，或者不是对象和数组，直接返回
//   if(typeof origin!=='object' || origin === null){
//     return origin
//   }
//   let target
//   if(Object.prototype.toString.call(origin)==='[object Array]'){
//     target=[]
//   }else{
//     target={}
//   }
//   for(let key in origin){
//     // 保证key不是原型上的属性
//     if(origin.hasOwnProperty(key)){
//       // 递归调用
//       target[key]=deepClone(origin[key])
//     }
//   }
//   return target
// }

// 第二遍
// function deepClone(source){
//   if(typeof source!=='object'||source==null){
//     return source
//   }
//
//   let target;
//   if(Object.prototype.toString.call(source)!=='[object Object]'){
//     target={}
//   }else if(Object.prototype.toString.call(source)!=='[object Array]'){
//     target=[]
//   }
//
//   for(let key in source){
//     if(source.hasOwnProperty(key)){
//       target[key]=deepClone(source[key])
//     }
//   }
//
//   return target
// }

// 第三遍
// function deepClone(source){
//   if(typeof source!=='object'|| source==null){
//     return source
//   }
//   let target;
//   if(Object.prototype.toString.call(source)==='[object Object]'){
//     target={}
//   }else if(Object.prototype.toString.call(source)==='[object Array]'){
//     target=[]	}
//
//   for(let key in source){
//     if(source.hasOwnProperty(key)){
//       target[key]=deepClone(source[key])
//     }
//   }
//   return target
//
// }

// 第四遍
// function deepClone(source){
//   if(typeof source!=='object'||source==null){
//     return source
//   }
//
//   let target=null;
//   if(Object.prototype.toString.call(source)==='[object Object]'){
//     target={}
//   }else if(Object.prototype.toString.call(source)==='[object Array]'){
//     target=[]
//   }
//   for(let key in source){
//     if(source.hasOwnProperty(key)){
//        target[key]=deepClone(source[key])
//     }
//   }
//   return target
// }

// 第五遍
function deepClone(source){
  if(typeof source!=='object'){
    return source
  }
  let target={}
  if(Object.prototype.toString.call(source)==='[object Object]'){
    target={}
  }else{
    target=[]
  }
  for(let key in source){
    if(source.hasOwnProperty(key)){
      target[key]=deepClone(source[key])
    }
  }
  return target
}
