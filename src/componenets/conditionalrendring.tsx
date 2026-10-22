// using Ternery operator 

import { useState } from "react";

function ConditionalRendering(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    function Clickhandle(){
        setIsLoggedIn(true)
    }



    return (
        <>
        {isLoggedIn ? <p> Welcome Back! </p> : <p> Please log in.</p>}
        <button onClick ={ Clickhandle}>Log In</button>
        </>
    )

}

export default ConditionalRendering
