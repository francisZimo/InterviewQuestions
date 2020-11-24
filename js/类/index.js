class test{
  constructor (){
    this.state={
      age:90
    }
  }
  list={
    name:'francis'
  }
  static info={
    test:'x'
  }
  say(){
    console.log(this)
    console.log('hello')
  }
  study=()=>{
    console.log(this)
    console.log('study')
  }
}
let t1=new test()