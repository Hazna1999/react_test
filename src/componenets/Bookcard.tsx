
type bookcardprops ={
    title : string
    author : string
    year : number
};
function Bookcard({title, author, year} : bookcardprops){
    return(
        <div>
            <h1>Book Details</h1>
            <p>Title : {title}</p>
            <p>Author : {author}</p>
            <p>Year : {year}</p>
        </div>
    )
}
export default Bookcard
