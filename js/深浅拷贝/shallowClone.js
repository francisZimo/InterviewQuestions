function shallowClone(origin){
  if(typeof origin!=='object'|| origin === null){
    return origin
  }
  let target
  if(Object.prototype.toString.call(origin)==='[object Array]'){
    target=[]
  }else{
    target={}
  }
  for(let key in origin){
    target[key]=origin[key]
  }
  return target
}
console.log('exec')