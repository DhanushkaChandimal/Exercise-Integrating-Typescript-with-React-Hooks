import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    return(
        <div>
            <p>{count}</p>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Multiply by 10</button>
        </div>
    );
}

export default Counter;