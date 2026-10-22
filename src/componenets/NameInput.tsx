import { useState } from "react";

function NameInput() {
    const [value, setValue] = useState("");
    function handleChange(event){
        setValue(event.target.value)
    }

    return (
        <div style={{
            padding: "20px",
            textAlign: "center"
        }}>
            <h2>Controlled Input</h2>
            <input style={{
                padding: "10px",
                width: "300px",
                fontSize: "16px"
            }}
                type="text" 
                placeholder="Please enter your name.." 
                value={value}
                onChange={handleChange}
            />
            <p>hello, {value}</p>
        </div>
    );
}

export default NameInput;