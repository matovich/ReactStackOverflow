import React, { component, useEffect, useState } from "react";
import './App.css';

function Question() {
    const [data, setData] = useState();
    const [questionNumber, setQuestionNumber] = useState(0);

    useEffect(() => {
        const url =
            'https://api.stackexchange.com/2.3/questions?page=1&pagesize=30&order=desc&min=100&max=200&sort=votes&site=stackoverflow&filter=!6Wfm_gSvlYUX9'

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                if (result) {
                    setData(result.items.filter(function (value, index, arr) {
                        return value.answer_count > 1 && value.accepted_answer_id
                    }));
                    console.dir(result);
                }
            })
    }, []);

    function next() {
        if (questionNumber + 1 < data.length)
            setQuestionNumber(questionNumber + 1);
    }

    function previous() {
        if (questionNumber > 0)
            setQuestionNumber(questionNumber - 1);
    }

    return (
        <>
            <div className="Button-box">
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
            {data && <div className="Question">
                <h3>{data[questionNumber].title}</h3>
                <article dangerouslySetInnerHTML={{ __html: data[questionNumber].body }}>
                </article>
            </div>}
        </>
    )
}

export default Question;