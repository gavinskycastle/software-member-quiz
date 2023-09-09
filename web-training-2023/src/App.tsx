import React from "react";
import "./App.css";
import { useState } from 'react'

function App() {
  const [answers, setAnswers] = useState([])

  // function SetAnswers(){
  //   <input type="text" value="Answer to Question One"></input>
  // }

  return (
    <>
      <h1>Quiz about Data Science!</h1>
      <div className="card">
        <p>Time to make your very own quiz.</p>

        <input type="text" placeholder="Answer to question one"/>
        <button>Submit</button>

       

  
  

     
      </div>
    </>
  );
}

export default App;
