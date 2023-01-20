import React, { useEffect, useState } from "react";
import './App.css';
import Answer from './Answer.js';

function Answers(props) {
    const { questionId } = props;
    const [data, setData] = useState();

    useEffect(() => {
        const url =
            `https://api.stackexchange.com/2.3/questions/${questionId}/answers?order=desc&sort=activity&site=stackoverflow&filter=!nOedRLqQ19`
        if (!data) {
            fetch(url)
                .then((result) => result.json())
                .then((result) => {
                    if (result) {
                        setData(result);
                        console.dir(result);
                    }
                })
        }
    }, [data, questionId]);

    function answers() {
        if(data)
        {
            return data.items.map((item, index) => (
                <li key={index}><Answer answerHtml={item.body} answerId={item.answer_id} /></li>));
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