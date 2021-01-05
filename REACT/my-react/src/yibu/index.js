import React, { useState, useEffect ,useRef} from 'react';
import Child from './child'

function Example() {
  const [count, setCount] = useState(0);
  const [name,setName] =useState('francis')
  //
  //   // Similar to componentDidMount and componentDidUpdate:
  //   // useEffect(() => {
  //   //   // Update the document title using the browser API
  //   //   // document.title = `You clicked ${count} times`;
  //   //   console.log('初始化')
  // },[]);
  const myRef=useRef()

  useEffect(()=>{

    setTimeout(()=>{
      setName('zimo')
      myRef.current='zimo'
    },2000)
  },[])

  useEffect(()=>{

    setTimeout(()=>{
      console.log('5秒后更新',name,myRef.current)
    },5000)
  },[])

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    console.log('父组件 count值更新')

  },[count]);

  useEffect(()=>{
    console.log(name,'==name变化')
  },[name])

  const getNewValue=()=>{
    console.log('得到新的count',count)
  }

  return (
    <div>
      <h3>父组件name:{name}</h3>
      <p>You clicked {count} times</p>
      <Child age={count}/>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={getNewValue}>得到新的value</button>
    </div>
  );
}

export default Example