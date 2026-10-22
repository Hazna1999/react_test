import {useState} from "react"

function Countswitcher(){
    const [count, setCount] = useState(0)
    function handleIncrement(){
        setCount(count + 1)
    }
    function handleDecrement(){
        setCount(count - 1)
    }
    function handleReset(){
        setCount(0)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <p> count : {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick = {handleDecrement}>Decrement</button>
            <button onClick = {handleReset}>Reset</button>
        </div>
    )
}
export default Countswitcher