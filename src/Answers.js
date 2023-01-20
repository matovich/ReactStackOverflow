import React, { useEffect, useState } from "react";
import './App.css';
import Answer from './Answer.js';

function Answers(props) {
    const { questionId, revealAcceptedAnswer } = props;
    const [data, setData] = useState();

    useEffect(() => {
        const url =
            `https://api.stackexchange.com/2.3/questions/${questionId}/answers?order=desc&sort=activity&site=stackoverflow&filter=!nOedRLqQ19`

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                if (result) {
                    setData(result);

                    console.log("Answers Data");
                    console.dir(result);
                }
            })
    }, [questionId]);

    function answers() {
        if (data) {
            return data.items.map((item, index) => (
                <li key={index}><Answer answerHtml={item.body} acceptedAnswer={item.is_accepted} answerId={item.answer_id} revealAcceptedAnswer={revealAcceptedAnswer} /></li>));
        }
    }

    return (
        <>
            {data &&
                <ul>{answers()}</ul>
            }
            {!data && <div className="Answer">
                <h3>Loading...</h3>
            </div>}
        </>
    )
}

export default Answers;