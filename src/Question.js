import React, { useEffect, useState } from "react";
import './App.css';
import Answers from './Answers.js';

function Question() {
    const [data, setData] = useState();
    const [questionNumber, setQuestionNumber] = useState(0);
    const [showAcceptedAnswer, setShowAcceptedAnswer] = useState(false);
    const [selectedAnswerId, setSelectedAnswerId] = useState(0);

    useEffect(() => {
        const url =
            'https://api.stackexchange.com/2.3/questions?page=1&pagesize=40&order=desc&min=100&max=200&sort=votes&site=stackoverflow&filter=!6Wfm_gSvlYUX9'

        if (!data) {
            fetch(url)
                .then((result) => result.json())
                .then((result) => {
                    if (result) {
                        setData(result.items.filter(function (value, index, arr) {
                            return value.answer_count > 1 && value.answer_count < 16 && value.accepted_answer_id
                        }));
                        console.log(`Quota Remaining: ${result.quota_remaining}`);
                    }
                })
        }
    }, [data]);

    function next() {
        if (questionNumber + 1 < data.length) {
            setShowAcceptedAnswer(false);
            setQuestionNumber(questionNumber + 1);
        }
    }

    function previous() {
        if (questionNumber > 0) {
            setShowAcceptedAnswer(false);
            setQuestionNumber(questionNumber - 1);
        }
    }

    function showHideAcceptedAnswer() {
        setShowAcceptedAnswer(!showAcceptedAnswer);
    }

    function selectAnswer(answerId) {
        if (answerId) {
            setSelectedAnswerId(answerId);
        }
    }

    return (
        <>
            <div className="Button-box">
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
                <button onClick={showHideAcceptedAnswer}>{showAcceptedAnswer ? "Hide Accepted Answer" : "Show Accepted Answer"}</button>
            </div>
            <h2>Question {questionNumber + 1} of {data ? data.length : ''}: </h2>
            {data && <div>
                <div className="Question">
                    <h3>{data[questionNumber].title}</h3>
                    <article dangerouslySetInnerHTML={{ __html: data[questionNumber].body }}>
                    </article>
                </div>
                <h2>Answers (click to select an answer):</h2>
                <Answers questionId={data[questionNumber].question_id} revealAcceptedAnswer={showAcceptedAnswer} setSelectAnswer={(id) => selectAnswer(id)} selectedAnswerId={selectedAnswerId} />
            </div>

            }
            {!data && <div className="Question">
                <h3>Loading...</h3>
            </div>}
        </>
    )
}

export default Question;