function Studentmaping()
{
    const names = ["Hazna","Jesna","Riyas"]

    return(
        <div>
            {names.map((names) => (
                <p>{names}</p>
            ))}
        </div>

    )

}

export default Studentmaping