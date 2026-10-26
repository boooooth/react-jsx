import { useRef, useState } from "react";

export default function App() {
    const [number, setNumber] = useState(0);
    function addByOne() {
        // setNumber(number + 1);
        setNumber((lol) => lol + 1);
        inputRef.current.focus();
    }

    function minusByOne() {
        setNumber(number - 1);
    }

    const inputRef = useRef(null);
    function checkRef() {
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={addByOne}>ADD 1</button>
            <button onClick={minusByOne}>MINUS 1</button>


            <input ref={inputRef} onChange={checkRef} type="text" />
        </div>
    );
}