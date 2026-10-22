import {useEffect} from  "react"
import {useState} from "react"


function  Pagetitle(){

    const [count, setCount] = useState(0)
    const [text, setText] = useState("")


    useEffect(()=> {
        document.title = "Student Dashboard"
        console.log("Componenet loaded !")
    }, [text])
    function handleChange(event)
    {
        setText(event.target.value)
    }

    return (
        <div>
            <h1>Welcome Dashboard</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <input
        type="text"
        value = {text}
        onChange={handleChange}
        placeholder="Type Something..."
      />
        </div>
    )   
}

export default Pagetitle

