
import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setCount((currentCount) => currentCount + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return <p>You have been on this website since {count} seconds!</p>
}

export default Counter;
