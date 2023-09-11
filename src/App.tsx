import './App.css';
import { useState } from 'react';
import Question from './Question';

function App() {
    const [response1, setResponse1] = useState<string>();
    const [response2, setResponse2] = useState<string>();
    const [response3, setResponse3] = useState<string>();
    const [response4, setResponse4] = useState<string>();

    const [percentScore, setPercentScore] = useState(0);

    const answer1 = 'XOM';
    const answer2 = 'Jacob Bates';
    const answer3 = 'the trailer';
    const answer4 = 'NATE';

    const checkAnswers = () => {
        const correct1 = response1 === answer1;
        const correct2 = response2 === answer2;
        const correct3 = response3 === answer3;
        const correct4 = response4 === answer4;

        const totalCorrect = [correct1, correct2, correct3, correct4].filter(
            e => e
        ).length;

        setPercentScore((100 * totalCorrect) / 4);
    };

    const scoreBad = percentScore <= 60;

    return (
        <>
            <header>
                <h1>Cone Lore Quiz</h1>
                <p>Welcome to Data Science</p>
            </header>
            <main>
                <Question
                    title='Question 1: What was the first cone name?'
                    onChange={setResponse1}
                />
                <Question
                    title='Question 2: Who was the original cone namer?'
                    onChange={setResponse2}
                />
                <Question
                    title='Question 3: Where did Hardware hide XOM at OC Regional 2022?'
                    onChange={setResponse3}
                />
                <Question
                    title='Question 4: Whose broken drivetrain do we still remember to this day?'
                    onChange={setResponse4}
                />

                <div>
                    <p>Answers you typed:</p>
                    <p>{response1}</p>
                    <p>{response2}</p>
                    <p>{response3}</p>
                    <p>{response4}</p>
                </div>

                <div>
                    <button onClick={checkAnswers}>Check answers</button>
                </div>

                <div className={scoreBad ? 'bad' : 'good'}>
                    Score: {percentScore}%
                </div>

                <iframe
                    width='912'
                    height='747'
                    src='https://www.youtube.com/embed/jtyFdK2Y33s'
                    title='Fish dance Beach Parade'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                />
            </main>
        </>
    );
}

export default App;
