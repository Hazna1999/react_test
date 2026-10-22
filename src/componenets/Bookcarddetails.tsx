import Bookcard from "./Bookcard"

function Bookcarddetails(){
    return(
        <div>
            <Bookcard title="The Great Gatsby" author="F. Scott Fitzgerald" year={1925} />
            <Bookcard title="To Kill a Mockingbird" author="Harper Lee" year={1960} />
            <Bookcard title="Garden" author="George Orwell" year={1948} />
        </div>
    )
}
export default Bookcarddetails