import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [buttonStatus, setButtonStatus] = useState(1);

    function decreaseCount() {
        if (count <= -9) {
            setCount("Done");
            setButtonStatus(0);
        } else {
            setCount(count - 1);
        }
    }

    function increaseCount() {
        if (count >= 9) {
            setCount("Done");
            setButtonStatus(0);
        } else {
            setCount(count + 1);
        }
    }

    function resetCount() {
        setCount(0);
        setButtonStatus(1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={decreaseCount} disabled={!buttonStatus}>
                -
            </button>
            <button onClick={resetCount} disabled={buttonStatus}>
                Reset
            </button>
            <button onClick={increaseCount} disabled={!buttonStatus}>
                +
            </button>
        </>
    );
}

export default App;
