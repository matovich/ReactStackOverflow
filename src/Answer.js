import React from "react";
import './App.css';

function Answers(props) {
    const { answerHtml, acceptedAnswer, revealAcceptedAnswer, answerId, setSelectAnswer, selectedAnswerId  } = props;

    function getClass() {

        if(selectedAnswerId === answerId && revealAcceptedAnswer && acceptedAnswer){
            return "Selected-accepted-answer"; 
        }
        
        if(selectedAnswerId === answerId){
            return "Selected-answer";
        }

        if(revealAcceptedAnswer && acceptedAnswer){
            return "Accepted-answer";
        }

        return "Answer";
    };


    return (
        <>
            <div onClick={() => setSelectAnswer(answerId)} className={getClass()}>
                <article dangerouslySetInnerHTML={{ __html: answerHtml }}>
                </article>
            </div>
        </>
    )
}

export default Answers;