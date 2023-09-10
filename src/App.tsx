import React from "react";
import "./App.css";
import { useState } from 'react'

function App() {
  const [answer, setAnswer] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>;  }; }) => {
    setAnswer(event.target.value);
  }

  const handleChange2 = (event: { target: { value: React.SetStateAction<string>;  }; }) => {
    setAnswer1(event.target.value);
  }
  const handleChange3 = (event: { target: { value: React.SetStateAction<string>;  }; }) => {
    setAnswer2(event.target.value);
  }
  const handleChange4 = (event: { target: { value: React.SetStateAction<string>;  }; }) => {
    setAnswer3(event.target.value);
  }
  const handleChange5 = (event: { target: { value: React.SetStateAction<string>;  }; }) => {
    setAnswer4(event.target.value);
  }



  
  const[correctAnswers] = useState('Cones are beautiful');
  const[correctAnswers1] = useState('Teal');
  const[correctAnswers2] = useState('Beach Fish Parade :3');
  const[correctAnswers3] = useState('yes');
  const[correctAnswers4] = useState('Answer %');
  const[submitted,setSubmitted] = useState(false);

 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
 
    setSubmitted(true);

  }

  const[check, setCheck] = useState('');
  const[check1, setCheck1] = useState('');
  const[check2, setCheck2] = useState('');
  const[check3, setCheck3] = useState('');
  const[check4, setCheck4] = useState('');


const checkAnswers = () => {
  
  if (answer == correctAnswers) {
    setCheck("correct :3");
  }
  else {
    setCheck("not quite right...");
  }
}
const checkAnswers1 = () => {
  
    if (answer1 == correctAnswers1) {
      setCheck1("correct :3");
    }
    else {
      setCheck1("not quite right...");
    }
  } 
const checkAnswers2 = () => {
  
      if (answer2 == correctAnswers2) {
        setCheck2("correct :3");
      }
      else {
        setCheck2("not quite right...");
      }
    }
const checkAnswers3 = () => {
  
      if (answer3 == correctAnswers3) {
        setCheck3("correct :3");
      }
      else {
        setCheck3("not quite right...");
      }
    }
const checkAnswers4 = () => {
  
      if (answer4 == correctAnswers4) {
        setCheck4("correct :3");
      }
      else {
        setCheck4("not quite right...");
      }
    }

      


  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>KAWABUNGA EPIC DATA SCIENCE QUIZ</h1>
      <br></br>
       <p>Opinion on Cones? yes or yes :3</p>
       <input type="text" value={answer} onChange={handleChange}/>  
      <br></br>
       <p>What is Natalie's Favorite Color?</p>
       <input type="text" value={answer1} onChange={handleChange2}/>
      <br></br>
      <p>Fish?</p>
      <input type="text" value={answer2} onChange={handleChange3}/>
      <br></br>
      <p>Do the cones have names?</p>
      <input type="text" value={answer3} onChange={handleChange4}/>
      <br></br>
      <p>Question #5</p>
      <input type="text" value={answer4} onChange={handleChange5}/>

      <br></br>
      <br></br> 
       <button type="submit" onClick={checkAnswers}>submit :3</button>
       <button type="submit" onClick={checkAnswers1}>submit :3</button>
       <button type="submit" onClick={checkAnswers2}>submit :3</button>
       <button type="submit" onClick={checkAnswers3}>submit :3</button>
       <button type="submit" onClick={checkAnswers4}>submit :3</button>
      {submitted && (
        <><div>
            <h2>Your submitted answers:</h2>
          </div><table className="table-auto">
              <thead>
                <tr>
                  <th style={{ width: '33%' }}>Answer</th>
                  <th style={{ width: '33%' }}>Your Answer</th>
                  <th style={{ width: '33%' }}>yes/no</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{correctAnswers}</td>
                  <td>{answer}</td>
                  <td>{check}</td>
                </tr>
                <tr>
                  <td>{correctAnswers1}</td>
                  <td>{answer1}</td>
                  <td>{check1}</td>
                </tr>
                <tr>
                  <td>{correctAnswers2}</td>
                  <td>{answer2}</td>
                  <td>{check2}</td>
                </tr>
                <tr>
                  <td>{correctAnswers3}</td>
                  <td>{answer3}</td>
                  <td>{check3}</td>
                </tr>
                <tr>
                  <td>{correctAnswers4}</td>
                  <td>{answer4}</td>
                  <td>{check4}</td>
                </tr>
              </tbody>
            </table></>
      )}

    </form>
    </>
  );




}



export default App;