function AlertButton(){
    function handleClick(){
        alert("Button clicked!");
    }
    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    );
}

export default AlertButton