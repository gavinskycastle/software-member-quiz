import { ChangeEventHandler } from "react";

function Question(props: { title: string, onChange: (value: string) => void }) {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
props.onChange(event.target.value);
    };


    return (
        <>
            <h2>{props.title}</h2>
            <input onChange={handleChange} />
        </>
    );
}

export default Question;