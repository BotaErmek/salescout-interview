// Implement a Counter component with two buttons:
// “Increase” and “Decrease”, which displays the current counter value.
import React from 'react'

function Counter() {
    import React, { useState } from 'react';

    function Counter() {
        const [count, setCount] = useState(0);

        const increase = () => setCount((prev) => prev + 1);
        const decrease = () => setCount((prev) => prev - 1);

        return (
            <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md w-64">
                <h1 className="text-xl font-semibold mb-4">Counter: {count}</h1>
                <div className="flex gap-4">
                    <button
                        onClick={decrease}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                    >
                        Decrease
                    </button>
                    <button
                        onClick={increase}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                    >
                        Increase
                    </button>
                </div>
            </div>
        );
    }

    export default Counter;

    return (<></>)
}

export default Counter