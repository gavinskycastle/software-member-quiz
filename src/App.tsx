import { useState } from 'react';
import './App.css';
import Question from './Question';

function App() {
    const [answer1, setAnswer1] = useState<string>();
    const [answer2, setAnswer2] = useState<string>();
    const [answer3, setAnswer3] = useState<string>();
    const [answer4, setAnswer4] = useState<string>();

    const [colorChanged, setColorChanged] = useState(false);

    return (
        <>
            <h1 className={colorChanged ? 'changed' : ''}>Penguin Quiz</h1>
            <p>Time to make your very own sundae.</p>
            {/*Comment */}

            <Question
                title='1. What color are penguins'
                onChange={setAnswer1}
            />
            <Question
                title='2. How tall is the average penguin?'
                onChange={setAnswer2}
            />
            <Question title='3. Can penguins fly?' onChange={setAnswer3} />
            <Question title='4. What do penguins eat?' onChange={setAnswer4} />

            {/*The proper way to do this is with padding,
            but we haven't learned that yet*/}
            <br />

            <div>
                <button onClick={() => setColorChanged(!colorChanged)}>
                    Check answers
                </button>
            </div>

            <h2>Answers that you typed</h2>

            <p>{answer1}</p>
            <p>{answer2}</p>
            <p>{answer3}</p>
            <p>{answer4}</p>
        </>
    );
}

export default App;
