import {useEffect, useState} from  "react";

function Apifetch()
{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() =>
    {
        async function fetchUsers()
        {
        try 
        {
            const content = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await content.json()
            setUsers(data)
            setLoading(false)
        }catch (err)
        {
            setError("Failed to load users. Please try again.")
            setLoading(false)

        }
    }

    
fetchUsers()
},[])

if (loading) {
    return <p>Loading...</p>    
}
if( error ) {
    return <p>{error}</p>
}

return (
    <div>
        <h1>API Fetch Example</h1>
        {users.map((user)=>
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )}


    </div>
)
}
export default Apifetch