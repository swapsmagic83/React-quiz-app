import React,{useState, useEffect} from "react";
import Result from "./Result";
const shuffle = (array) =>{
    return array.sort(()=>Math.random() - 0.5)
}

const Question = ({ques,getQuestions}) =>{
    const [i,setI] = useState(0);
    const [score,setScore] = useState(0);
    const [answers,setAnswers] = useState([]);
    const [selectedAns,setSelectedAns] = useState('');

    useEffect(()=>{
        if(i < ques.length){
            const current = ques[i];
            const AllAnswers = shuffle([current.correctAnswer, ...current.incorrectAnswers]);
            setAnswers(AllAnswers);
        }
    },[i])
    if(!ques || ques.length ==0) return null;
    
    const current = ques[i]
    const handleNext = () =>{   
        if(selectedAns === current.correctAnswer){
            setScore(score+1)
        }
        setSelectedAns('')
        setI(i+1)    
    }
    const Restart = () =>{
        setI(0)
        setAnswers([])
        setScore(0)
        setSelectedAns('')    
    } 
    return (
        <div>
            {i >= ques.length &&
            <Result score={score} 
            ques={ques} 
            Restart={Restart}
            getQuestions={getQuestions}/>
            }
            {i < ques.length && 
        <div><p><b>{current.question.text}</b></p>
        
        {answers.map((answer,idx)=>(
            <div key={idx}>
            <label>
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selectedAns=== answer}
                disabled={!!selectedAns}
                onChange={(e) => setSelectedAns(e.target.value)}
              />
              {answer}
            </label>
          </div>
            
        ))}
        <button onClick={handleNext} disabled={!selectedAns}>Next</button>
        {/* <h4>Your score: {score}</h4> */}
        {selectedAns === current.correctAnswer &&<h1>Correct</h1>}
        {selectedAns !== current.correctAnswer && selectedAns!=='' && <h1>Wrong</h1>}
        </div>}
        </div>
    )
}
export default Question;