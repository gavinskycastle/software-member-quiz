import './App.css';
import { useState } from 'react';
import Question from './Question';

function App() {
    const [answer1, setAnswer1] = useState<string>();
    const [answer2, setAnswer2] = useState<string>();
    const [answer3, setAnswer3] = useState<string>();
    const [answer4, setAnswer4] = useState<string>();
    const[colorChanged, setColorChanged] = useState(false);

    return (
        <>
        <h1 className={colorChanged ?'changed' : ''}>Penguin Quiz</h1>
            <h1>[HARDEST QUIZ EVER]</h1>
            <p>Time to make your very own sherizz.</p>
            {/*comment*/}
            <div>
                <input />
            </div>
            
            <Question title='1. What color are people who rizz up?' onChange={setAnswer1}/>
            <Question title='2. What color is the girl your rizzing?'onChange={setAnswer2}/> 
            <Question title='3. Is Kyles color of rizz diffrent?'onChange={setAnswer3}/>
            <Question title='4. did dyaln rizz up any girls at the soccer tryouts?'onChange={setAnswer4}/>
                <h2> Question 1: What color is rizz?</h2>
                <p> This is also a paragraph</p>
            

            <h2> Question:2 What is rizz?</h2>
            <input />

            <div> 
                <button>Check Answers</button>
            </div>
            <button onClick={() => setColorChanged(true)}>anything</button>
            <h2>Answers that you typed</h2>
            <p>{answer1}</p>
            <p>{answer2}</p>
            <p>{answer3}</p>
            <p>{answer4}</p>
            </>
    );
}

export default App;
