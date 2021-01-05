
import React, { useState, useEffect } from 'react';

function Example(props) {

  const [count, setCount] = useState(props.age);

  // useEffect(()=>{
  //   console.log('孩子初始化')
  //   setCount(props.age)
  // })

  useEffect(()=>{
    console.log(props.age,'===ages')
  },[])

  useEffect(() => {
    console.log('孩子组件 count值更新')
  },[count]);

  const {age} =props

  useEffect(() => {
    console.log('监听到的对象')
    setCount(age)
  },[age]);

  return (
    <div>
      <p>孩子的年纪{props.age}</p>
      <p>孩子的年纪new---{count}</p>
    </div>
  );
}

export default Example