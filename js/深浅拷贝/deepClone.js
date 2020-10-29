function deepClone(origin){
  // origin 是null，或者不是对象和数组，直接返回
  if(typeof origin!=='object' || origin === null){
    return origin
  }
  let target
  if(Object.prototype.toString.call(origin)==='[object Array]'){
    target=[]
  }else{
    target={}
  }
  for(let key in origin){
    // 保证key不是原型上的属性
    if(origin.hasOwnProperty(key)){
      // 递归调用
      target[key]=deepClone(origin[key])
    }
  }
  return target
}
