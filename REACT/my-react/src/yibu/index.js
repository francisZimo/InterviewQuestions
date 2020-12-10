import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    console.log(count,'==effect')
    init()
    setTimeout(()=>{
      console.log(count,'==setTimeout')
    },2000)
  },[]);

  const init=()=>{
    setCount(22)
    console.log(count,'==init')
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example