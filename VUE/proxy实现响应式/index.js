const data={
  name:'francis',
  age:20,
  child:{
    name:'zimo',
    age:'3'
  }
}

// const data=[1,2,3]
const proxyConfig={
  get(target,key,receiver){
    // console.log(receiver,111)
    const result=Reflect.get(target,key,receiver)

    // 只处理本身（非原型）属性
    const ownKeys=Reflect.ownKeys(target)
    if(ownKeys.includes(key)){
      console.log('get',key)
    }

    console.log(result,'===result')
      // 深度监听
    // 性能如何提升的 defineProperty 一次性递归完成 proxy惰性递归 获取到哪一次才会递归完成
    return observe(result) //返回结果
  },
  set(target,key,val,receiver){

    console.log('set',key,val)
    console.log(val,target[key])
    if(val===target[key]){
      return true
    }
  // 判断是不是新增的
    const ownKeys=Reflect.ownKeys(target)
    if(ownKeys.includes(key)){
     console.log('原有的key',key)
    }else{
      console.log('新增的key',key)
    }
    const result=Reflect.set(target,key,val,receiver)

    return result // 是否设置成功
  },
  deleteProperty (target, key) {
    const result=Reflect.deleteProperty(target,key)
    console.log('delete property',key)
    console.log('result',result)
    return result // 是否删除成功

  }
}



function observe(target){
  if(typeof target!=='object'){
    return target
  }

  let observeData=new Proxy(target,proxyConfig)
  return observeData
}

let ProxyData=observe(data)




