import React from "react";
import './App.css';

function Answers(props) {
    const { answerHtml, acceptedAnswer, revealAcceptedAnswer, answerId } = props;

    return (
        <>
            <div className={revealAcceptedAnswer && acceptedAnswer ? "Accepted-answer" : "Answer"}>
                <article dangerouslySetInnerHTML={{ __html: answerHtml }}>
                </article>
            </div>
        </>
    )
}

export default Answers;