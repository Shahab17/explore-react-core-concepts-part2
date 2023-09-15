import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    const handleAdd = ()=>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleLess=()=>{
        const lessCount = count - 1;
        setCount(lessCount)
    }

    return (
        <div style={{border: '2px solid red', borderRadius:'10px', padding:'20px'}}>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd} >Add</button>
            <button onClick={handleLess}>Less</button>
        </div>
    )
}