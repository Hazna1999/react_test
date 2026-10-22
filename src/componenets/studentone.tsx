function StudentCard(){
    const student = "Hazna Saith"
    const age = 27
    const address = "Manalikudy House ,kozhipilly p.o, Ernakulam, Kerala"
    return (
        <div>
            <h1>Student Details</h1>
            <p>Student Name: {student}</p>
            <p>Age: {age}</p>
            <p>Address: {address}</p>
        </div>
    )
}
export default StudentCard