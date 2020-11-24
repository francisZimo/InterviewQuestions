import React,{Component} from 'react'

export default class Event extends Component{
  constructor(props){
    super(props)
    this.state={
      name:'francis'
    }
  }
  changeName=(event)=>{
    console.log(event)
    console.log(event.nativeEvent) // 原生event
    console.log('current target',event.currentTarget) // 指向当前元素，假象
    console.log('current target innerHTML',event.currentTarget.innerHTML)
    // 真实event
    console.log('nativeEvent target',event.nativeEvent.target)
    // target 指向root。17以前指向document
    console.log('nativeEvent current target',event.nativeEvent.currentTarget)
    // 1.event 是SyntheticEvent，模拟出来DOM事件所有能力
    //2. event.nativeEvent 是原生事件对象
    // 3。所有事件都被挂在到document上，17以后root上
    // 4 。和dom事件不一样，和vue事件也不一样


    this.setState({
      name:'zimo'
    })
  }
  render(){

    return (
      <div>
        <h3>{this.state.name}</h3>
        <button onClick={this.changeName}>change</button>
      </div>
    )
  }


}