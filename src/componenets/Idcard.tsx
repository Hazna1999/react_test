type IdcardProps = {
    name : string;
    age: number;
    grade : string;
};
function Idcard({name, age, grade} : IdcardProps) {
    return (
        <div>
            <h1>Id Card</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Grade: {grade}</p>
        </div>
    )
}
export default Idcard