import React, { useState } from "react";
 
const FunctionalComponent=()=>{
    const [count, setCount] = useState(0);
 
    const increase = () => {
        setCount(count+1);
    }
 
    return (
        <div>
            <h1>Counter</h1>
          <h2>{count}</h2>
            <button onClick={increase}>Add</button>
        </div>
    )
} 
 
 
export default FunctionalComponent;