import { useState } from "react";

function LikeToggle() {
    const [isLiked, setIsLiked] = useState(false)
    const [count  , setCountincrement] = useState(0)

    function handleLike() {
        if (!isLiked) {
            setCountincrement(count + 1);
        } else {
            setCountincrement(count - 1);
        }
    }
   function handleLiketoggle(){
          setIsLiked(!isLiked)
         
   }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Like Toggle</h2>
            <button style={{ backgroundColor: isLiked ? "lightgray" : "lightblue", width: "100px", height: "30px", borderRadius: "5px" }} onClick={handleLike}>
                {isLiked ? "Unlike" : "Like"}
            </button>
            <p>{count}  Likes</p>
            <p>Toggle Button</p>
            <button style={{ backgroundColor: isLiked ? "lightgray" : "lightblue", width: "100px", height: "30px", borderRadius: "5px" }} onClick={handleLiketoggle}>
                {isLiked ? "Unlike" : "Like"}
            </button>
            
        </div>
    );
}

export default LikeToggle;