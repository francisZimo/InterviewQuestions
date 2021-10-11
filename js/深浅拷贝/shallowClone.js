// function shallowClone(origin){
//   if(typeof origin!=='object'|| origin === null){
//     return origin
//   }
//   let target
//   if(Object.prototype.toString.call(origin)==='[object Array]'){
//     target=[]
//   }else{
//     target={}
//   }
//   for(let key in origin){
//     target[key]=origin[key]
//   }
//   return target
// }

// function shallowClone(origin){
//   if(typeof origin !=='object' || !origin){
//     return origin 
//   }
//   let result=null;
//   if(Object.prototype.toString.call(origin)==='[object Array]'){
//     result=[]
//   }else{
//     result={}
//   }
//   for(let i in origin){
//     result[i]=origin[i]
//   }
//   return result
// }

// function shallowClone(origin){
//   if(typeof origin !=='origin' || !origin){
//     return origin
//   }
//   let result={}
//   if(Object.prototype.toString.call(origin)==='[object Array]'){
//     result=[]
//   }
//   for(let i in origin){
//     if(origin.hasOwnProperty(i)){
//       result[i]=origin[i]
//     }
//   }
//   return result
// }

function shallowClone(origin){
  if(typeof origin !=='object' || !origin){
    return origin
  }
  let result={}
  if(Object.prototype.toString.call(origin)==='[object Array]'){
    result=[]
  }
  for(let i in origin){
    if(origin.hasOwnProperty(i)){
      result[i]=origin[i]
    }
  }
  return result

}