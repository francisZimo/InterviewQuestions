
class jQuery{
  constructor (selector){
    const result=document.querySelectorAll(selector)
    const length=result.length
    for(let i=0;i<length;i++){
      this[i]=result[i]
    }
    this.length=length
    this.selector=this
  }
  get(index){
    return this[index]
  }
  each(fn){
    for(let i=0;i<this.length;i++){
      const elem=this[i]
      fn(elem)
    }
  }

  on(type,fn){
    return this.each((elem)=>{
      elem.addEventListener(type,fn,false)
    })
  }
}

class jquery2{
  constructor (selector){
    let result=document.querySelectorAll(selector)
    for(let i=0;i<result.length;i++){
      this[i]=result[i]
    }
    this.length=result.length


  }
  each(fn){
    for(let i=0;i<this.length;i++){
      let elem=this[i]
      fn(elem)
    }
  }

  on(type,fn){
    return this.each(elem=>{
      elem.addEventListener(type,fn,false)
    })
  }
}