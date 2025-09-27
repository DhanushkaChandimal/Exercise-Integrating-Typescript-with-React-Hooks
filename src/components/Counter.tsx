import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={() => setCount(count*10)}>Multiply by 10</button>
        </div>
    );
}

export default Counter;