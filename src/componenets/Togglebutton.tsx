import {useState} from "react"

function ToggleButton()
{
    const [ison, setIson] = useState(false)

    function togglehandle()
    {
         setIson(!ison)

    }

    return (
        <div>
            <button onClick = {togglehandle}>{ison ? "Hide" : "Show"}</button>
            {ison && <p> this is a secretae message </p> }
        </div>
    )
}


export default ToggleButton