function Multibutton() {
    function Sayhello(){
        alert("Hello");
    }
    function Saygoodbye(){
        alert("Goodbye");
    }
    function Showdate(){
        alert("Today is " + new Date().toLocaleDateString())
    }
    return (
        <div> 
            <button onClick={Sayhello}>Say Hello</button>
            <button onClick={Saygoodbye}>Say Goodbye</button>
            <button onClick={Showdate}>Show Date</button>   
        </div>
    )

}

export default Multibutton
