import handleInput from './handleInput';

function Question(props: { title: string; onChange: (value: string) => void }) {
    return (
        <>
            <h2>{props.title}</h2>
            <div>
                <input onChange={handleInput(props.onChange)} />
            </div>
        </>
    );
}

export default Question;
