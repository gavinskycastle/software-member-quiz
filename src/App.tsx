import { useState } from 'react';
import './App.css';
import Question from './Question';

function App() {
    const [answers, setAnswers] = useState(Array(6).fill(""));

    const correctAnswers = ["rizzbot", "british", "jacob", "beach parade", "kyle", "matt"];

    const setAnswer = (index: number, value: string) => {
        setAnswers(answers.map((e, i) => i === index ? value : e));
    }

    const [isCorrectAnswers, setIsCorrectAnswers] = useState(Array(6).fill(false));
    
    const [totalScore, setTotalScore] = useState(0.0);

    let [checkForAnswers, setCheckForAnswers] = useState(false);

    const checkAnswers = () => {
        setCheckForAnswers(true);
        setIsCorrectAnswers(
            correctAnswers.map((item, index) => item === answers[index])
        );
        // Generates a total score based on the state of each answer's correctness, for example, [true, true, false, false, false, false] returns 33.33%
        setTotalScore(+((isCorrectAnswers.map((item) => + item).reduce((a, b) => a + b, 0) / isCorrectAnswers.length) * 100).toFixed(2));
    }

    const [colorChanged, setColorChanged] = useState(false);

    return (
        <>
            <h1 className={colorChanged ? "changed" : ""}>Software member quiz</h1>

            <img src="/src/assets/cone.png"></img>

            <Question title="Q1: What name did Ronan suggest for the 2023 robot?"
                onChange={value => setAnswer(0, value)}
                isCorrect={isCorrectAnswers[0]}
                checkForAnswers={checkForAnswers}
                correctAnswer={correctAnswers[0]}
            />
            <Question title="Q2: What nationality is Mason?"
                onChange={value => setAnswer(1, value)} 
                isCorrect={isCorrectAnswers[1]}
                checkForAnswers={checkForAnswers}
                correctAnswer={correctAnswers[1]}
            />
            <Question title='Q3: Who said "Lemonate is levitating lemonade"?'
                onChange={value => setAnswer(2, value)}
                isCorrect={isCorrectAnswers[2]}
                checkForAnswers={checkForAnswers}
                correctAnswer={correctAnswers[2]}
            />
            <Question title="Q4: What was the name of the song Crisanto played during last year's programming trainings?"
                onChange={value => setAnswer(3, value)}
                isCorrect={isCorrectAnswers[3]}
                checkForAnswers={checkForAnswers}
                correctAnswer={correctAnswers[3]}
            />
            <Question title="Q5: Who gave everyone cookies with their face on it for their birthday?"
                onChange={value => setAnswer(4, value)}
                isCorrect={isCorrectAnswers[4]}
                checkForAnswers={checkForAnswers}
                correctAnswer={correctAnswers[4]}
            />
            <Question title="Q6: Who gave everyone cupcakes with their face on it for their birthday?"
                onChange={value => setAnswer(5, value)}
                isCorrect={isCorrectAnswers[5]}
                checkForAnswers={checkForAnswers}
                correctAnswer={correctAnswers[5]}
            />

            <br />

            <div>
                <button onClick={checkAnswers}>Check Answers</button>
            </div>
            
            <div>
                <button onClick={() => setColorChanged(!colorChanged)}>Change Color</button>
            </div>

            <br />
            
            <div>
                <h4>Total score: {totalScore}%</h4>
            </div>

            <br />
            
            <h2>Answers that you typed</h2>

            <h4>Q1: {answers[0]}</h4>
            <h4>Q2: {answers[1]}</h4>
            <h4>Q3: {answers[2]}</h4>
            <h4>Q4: {answers[3]}</h4>
            <h4>Q5: {answers[4]}</h4>
            <h4>Q6: {answers[5]}</h4>
        </>
    );
}

export default App;
