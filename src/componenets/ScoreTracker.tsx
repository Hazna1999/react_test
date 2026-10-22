import { useState } from "react"

function  ScoreTracker()
{

    const [scoreone, setScoreone] = useState(0)
    const [scoretwo, setScoretwo] = useState(0)
    
    function handleIncrementone(){
        setScoreone(scoreone + 1)

    } 
    function handleDecrementone(){
        setScoreone(scoreone - 1)
        
    }
    function handleIncrementtwo(){
        setScoretwo(scoretwo + 1)
    }
    function handleDecrementtwo(){
        setScoretwo(scoretwo - 1)
    }
    function handleResetone(){
        setScoreone(0)
    }
    function handleResettwo(){
        setScoretwo(0)
    }

    return (
        <div style={{ textAlign: "center", width: "300px", margin: "0 auto", padding: "20px" }}>
            <h3>Score Board</h3>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
            <p>Player One : {scoreone}</p>
            <button onClick={handleIncrementone}>+</button>
            <button onClick={handleResetone}>Reset</button>
            <button onClick={handleDecrementone}>-</button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
            <p>Player Two: {scoretwo}</p>
            <button onClick={handleIncrementtwo}>+</button>
             <button onClick={handleResettwo}>Reset</button>
            <button onClick={handleDecrementtwo}>-</button>
            </div>
            <p>{ scoreone === 0 && scoretwo === 0 ? "No scores yet" : scoreone > scoretwo ? "Player One is winner" : scoretwo > scoreone ? "Player Two is winner" : "It’s a tie!"}</p>
        </div>
    )
    

}

export default ScoreTracker