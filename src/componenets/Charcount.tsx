import  { useState } from "react";

function Charcount() {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    function handlechange(event){
        setText(event.target.value);
        setCount(event.target.value.length);
    }


    return (
        <div style={{
            padding: "20px",
            textAlign: "center"
        }}>
            <h2>Character Counter</h2>
            <textarea style={{
                width: "300px",
                height: "100px",
                padding: "10px",
                fontSize: "16px",
                color: count > 100 ? "red" : "black"
            }}
                value={text}
                onChange={handlechange}
                placeholder="Enter text here..."
            />
            <p>Character typed : {count}</p>
            <p>Remaining characters:{Math.max(0, 100 - count)} (100 maximum characters) </p>

        </div>
    );
}

export default Charcount