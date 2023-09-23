import React from 'react'
import { useEffect,useState  } from 'react';

const UseEffect = () => {
    const [count,setCount]=useState(0);
    
    useEffect(()=>
    {
      alert(" clicked me")
    })   
  return (
    <div>
        <p>Using UseEffect :- {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  )
}
export default UseEffect;


