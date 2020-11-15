// 更新试图
function updateView(){
  console.log('试图更新')
}


//重新定义数组原型
const oldArrayProperty=Array.prototype
// 创建新对象 原型指向oldArrayProperty,在扩展新的方法不会影响原型
const arrProto=Object.create(oldArrayProperty);
['push','pop','shift','unshift','splice'].forEach(methodName=>{
  arrProto[methodName]=function(){

    oldArrayProperty[methodName].apply(this,arguments)
    updateView() // 触发试图更新
  }
})
// 重新定义属性，监听起来
function defineReactive(target,key,value){
  // 深度监听
  observer(value)
  // 核心api
  Object.defineProperty(target,key,{
    get(){
      return value;
    },
    set(newValue){
      if(newValue!==value){
        observer(newValue)
        // 设置新值
        // 注意，value 一直在闭包中，此处设置完之后，get得到的值也是闭包中的
        value=newValue
        updateView()
      }
    }
  })
}


// 监听对象属性
function observer(target){
  if(typeof target !=='object'||target===null){
    // 不是对象数组
    return target
  }

  if(Array.isArray(target)){
    return target.__proto__=arrProto
  }

  // 重新定义各个属性（for in 也可以遍历数组）

  for(let key in target){
    defineReactive(target,key,target[key])
  }
}


// 准备数据
const data={
  name:'francis',
  age:60,
  detail:{
    job:'teacher'
  },
  nums:[1,2,3,4]
}

observer(data)

data.name='zimo'
data.age=50
data.detail.job='actress'
data.nums.push('999')




