import React from "react";
import './App.css';

function Answers(props) {
    const { answerHtml, answerId } = props;

    return (
        <>
            <div className="Answer">
                <article dangerouslySetInnerHTML={{ __html: answerHtml }}>
                </article>
            </div>
        </>
    )
}

export default Answers;