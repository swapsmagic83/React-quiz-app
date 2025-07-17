import axios from "axios";
import React, {useState} from "react";
import Question from "./Ouestion";

const QuePage = () =>{
    const [ques,setQues] = useState([])
    const [show,setShow] = useState(false)
    const getQuestions = async () =>{
        const res = await axios.get('https://the-trivia-api.com/v2/questions')
        setQues(res.data)  
        setShow(true)  
    }
    console.log(ques)
    return (
        <div>
            {!show && <button onClick={()=>getQuestions()}
             disabled={show} 
             >Start Game</button>}
            {ques.length > 0 && <Question ques={ques} show={show} getQuestions={getQuestions}/>}
        </div>
    )
}
export default QuePage;