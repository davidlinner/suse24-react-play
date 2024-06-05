import {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const [countDown, setCountDown] = useState(10);

    function handleClick() {
        setCount(count + 1);
        setCountDown(countDown - 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <h1>{countDown}</h1>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

export default Counter;
