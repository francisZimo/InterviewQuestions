class jQuery2{
  constructor (selector){
    let ele=document.querySelectorAll(selector)
    for(let i=0;i<ele.length;i++){
      this[i]=ele[i]
    }
    this.length=ele.length
  }
  each(fn){
    for(let i=0;i<this.length;i++){
      const elem=this[i]
      fn(elem)
    }
  }
  on(type,fn){
    return this.each(elem=>{
       elem.addEventListener(type,fn,false)
    })
  }

}