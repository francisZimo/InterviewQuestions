import React,{Component} from 'react'
import catImg from './cat.jpg'

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div>
        坐标：x:{mouse.x},y:{mouse.y}
          {/*<img src={catImg} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />*/}

      </div>

    );
  }
}

class Mouse extends React.Component{
  constructor (props){
    super(props)
    this.state={
      x:0,
      y:0
    }
  }
  handleMouseMove=(event)=>{
    this.setState({
      x:event.clientX,
      y:event.clientY
    })
  }

  render () {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {/*<h1>移动鼠标!</h1>*/}
        {/*<p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>*/}
        {/*<Cat mouse={this.state} />*/}
        { this.props.render(this.state)}
      </div>
    )
  }

}

class MouseTracker extends Component{
  render(){
    return (
      <div>
        <h1>移动鼠标</h1>
        <Mouse render={mouse=>{
          return <Cat mouse={mouse}></Cat>
        }}>

        </Mouse>
      </div>
    )
  }
}
export default MouseTracker