import {useState} from "react";

function Counter() {
    const [value, setValue] = useState(0);
    function handleIncrement() {
        setValue(value + 1);
    }
    function handleDecrement() {
        setValue(value - 1);
    }
    function handleReset() {
        setValue(0);
    }

    return (
        <div style={{
            padding: "20px",
            textAlign: "center"
        }}>
            <h2>Counter</h2>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: value < 0 ? "red" : value > 0 ? "green" : "black" }}>{value}</p>
            <button onClick={handleIncrement} style={{ margin: "5px" }}>+ Add</button>
            <button onClick={handleReset} style={{ margin: "5px" }}>Reset</button>
            <button onClick={handleDecrement} style={{ margin: "5px" }}>- Remove</button>
            
            <p>current count, {value}</p>
        </div>
    );
}

export default Counter;