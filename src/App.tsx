import './App.css'
import { useState } from 'react'
import Question from './Question'
function App() {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');
  const [percentScore, setPercentScore] = useState(0)


const correctAnswer1 = "25"
const correctAnswer2 = "67"
const correctAnswer3 = "29"
const correctAnswer4 = "2955946"
const correctAnswer5 = "200"

const checkAnswers = () => {
  const correct1 = answer1 === correctAnswer1;
  const correct2 = answer2 === correctAnswer2;
  const correct3 = answer3 === correctAnswer3;
  const correct4 = answer4 === correctAnswer4;
  const correct5 = answer5 === correctAnswer5;

var sum = 0
//if (correct1) {sum++}
//if (correct2) {sum++}
//if (correct3) {sum++}
//if (correct4) {sum++}
//if (correct5) {sum++}

const totalCorrect = [correct1, correct2, correct3, correct4, correct5].filter(
(e) => e
).length;

setPercentScore (totalCorrect*100/5)
}



  return (
    <>
      <h1>[Math Quiz]</h1>
      <div className="card">
        <p>
          This is a simple math quiz.
        </p>
      </div>
<Question title="Q1: 5^2=?" onChange= {setAnswer1}/>
<Question title="Q2: 134/2=?"  onChange= {setAnswer2} />
<Question title="Q3: 3(6*2+3)-4^4=?" onChange= {setAnswer3}/>
<Question title="Q4: 29559460/10"onChange= {setAnswer4}/>
<Question title="Q5: 65*3+5" onChange= {setAnswer5}/>
<div>
  <p>
    Answers you typed:
  </p>
  <p>
    {answer1}
    </p>
    <p>
    {answer2}
    </p>
    <p>
    {answer3}
    </p>
    <p>
    {answer4}
    </p>
    <p>
    {answer5}
  </p>
</div>
<button onClick= {checkAnswers}>
  Check Answers
</button>
<p>Percent correct: {percentScore}%</p>
    </>
  )
}

export default App
