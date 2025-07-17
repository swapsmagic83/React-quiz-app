import React from "react";

const Result = ({score,ques,Restart,getQuestions}) =>{
    
    return (
        <div>
            <h1>Quiz completed!!!</h1>
            <h1>You score is: {score}/{ques.length}</h1>
            <button onClick={()=>{Restart(); getQuestions();}} >Restart</button>
        </div>
    )
}
export default Result;