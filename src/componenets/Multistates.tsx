import {useState} from "react"

function LoginInputs(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div>
            <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    )
}
export default LoginInputs