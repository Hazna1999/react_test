function Objectmapping(){
    const students = [
        {id: 101 ,name:"Anu", course : "BCA" },
        {id: 102 ,name:"Tom", course : "MCA" },
        {id: 103 ,name:"Joy", course : "BCA" },
        {id: 104 ,name:"Geo", course : "BBA" }
    ]

    return(
        <div>
            { students.map((student) => (
                <div key = {student.id}>
                    <p>{student.name}</p>
                    <p>{student.course}</p>
                </div>
            ))}
        </div>

    )
    
}

export default Objectmapping