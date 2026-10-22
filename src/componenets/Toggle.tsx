import {useState} from "react"

function LightSwitch(){
    const [isOn, setISOn] = useState(false)

    function handleToggle(){
        setISOn(!isOn)
    }

    return(
        <div>
            <p>The light is {isOn ? "On" : "Off"}</p>
            <button onClick={handleToggle}>Toggle</button>
        </div>
    )

}


export default LightSwitch