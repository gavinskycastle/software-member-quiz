import { useState } from 'react';
import './App.css';
import Question from './Question';

function App() {

    const [answer1, setAnswer1] = useState<string>('Earth');
    const [answer2, setAnswer2] = useState<string>('');
    const [answer3, setAnswer3] = useState<string>('Tuesday');
    const [answer4, setAnswer4] = useState<string>('Tuesday');

    const [colorChanged, setColorChanged] = useState=boolean>();

    import handleInput from './handleInput';

    return (
        <>
            <h1>A Quiz</h1>
            <p>This is a paragraph :o</p>   

            <Question title="1. Where do penguins live?" onChange={setAnswer1}/>
            <Question title="2. How to make" onChange={setAnswer2}/>
            <Question title="3. What color is the sky?" onChange={setAnswer3}/>
            <Question title="4. What is 1+2?" onChange={setAnswer4}/>

            <br />

            <div>
                <button>Submit</button>
            </div>

            <p>{answer1}</p>
            <p>{answer2}</p>
            <p>{answer3}</p>
            <p>{answer4}</p>

        </>
    );
}

export default App;