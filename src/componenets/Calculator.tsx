function Calculator() {
    const num1 = 15
    const num2 = 4
    return (
        <div>
            <h1>Calculator</h1>
            <p>Addition: {num1 + num2}</p>
            <p>Subtraction: {num1 - num2}</p>
            <p>Multiplication: {num1 * num2}</p>
            <p>Division: {num1 / num2}</p>
        </div>

    )
}
export default Calculator