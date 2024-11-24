import React, { useState } from "react";

export default function ButtonCount() {
    // biggest idea in React is: state variables!
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Clicked {count} times
            </button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}