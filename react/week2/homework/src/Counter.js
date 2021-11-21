import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => setCount(count + 1), 1000);
    });

    return <p style={{ color: "blue" }}>You have spent {count} seconds on this website!</p>
}

export default Counter;