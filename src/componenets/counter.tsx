function Counter()
{
    let count = 0
    function handleClick(){
        count = count + 1
        console.log(count)
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>+1</button>
        </div>
    )


}
export default Counter