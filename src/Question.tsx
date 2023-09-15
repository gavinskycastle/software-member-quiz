import handleInput from "./handleInput";

function Question(props: {
    title: string,
    onChange: (value: string) => void,
    isCorrect: boolean,
    checkForAnswers: boolean,
    correctAnswer: string
}) {
    return (
        <>
            <div>
                <h2>{props.title}</h2>
                <input onChange={handleInput(props.onChange)}/>
            </div>
            {props.checkForAnswers &&
                    ( props.isCorrect ? 
                    <p className="correct">Yay! You got it correct!</p>
                    :
                    <p className="incorrect">You got it incorrect, the correct answer was {props.correctAnswer}</p>)
                }
            
        </>
    );
}

export default Question;