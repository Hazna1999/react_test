function SubjectList() {
    const Subject = [
        {id: 101 ,name:"Maths",},
        {id: 102 ,name:"English" },
        {id: 103 ,name:"Hindi" },
        {id: 104 ,name:"" }
    ]
    return (
        <div style={{
            padding: "20px",
            textAlign: "center",
            border: "1px solid black",
            borderRadius: "8px",
            backgroundColor: "#f0f0f0",
            width: "400px",
            margin: "0 auto"
        }}>
            <h2>Subject List</h2>
            {Subject.map((sub) => (
                <div key={sub.id} style={{
                    padding: "10px",
                    margin: "5px",
                    border: "1px solid gray",
                    borderRadius: "4px",
                    backgroundColor: "#f9f9f9"
                }}>

                <p style={{ margin: "0", color: "#333" }}>{sub.name}</p>
                </div>
            ))}
        </div> 

    )
}

export default SubjectList