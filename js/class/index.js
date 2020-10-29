class People{
  constructor (props){
    const {name,age} =props
    this.name=name
    this.age=age
  }
  say(){
    console.log(`hello ${this.name} ${this.age}`)
  }

}
class Student extends People{
  constructor(props){
    const {order,...other} =props
    super(other)
    this.order=order
  }

  learn(){
    console.log(`${this.name} 正在学习English,记录当前编号为${this.order}`)
  }

}
class Teacher extends People{
  constructor(props){
    const {subject,...other} =props
    super(other)
    this.subject=subject
  }

  teach(){
    console.log(`${this.name} 正在教授课程${this.subject}`)
  }

}