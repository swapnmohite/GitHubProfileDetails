import React, { useState } from 'react'

const Counter = () => {
    let initialCount = 0
    const [count, setCount] = useState(initialCount)
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className=""> <h1 className="text-2xl font-bold mb-4">Count: {count}</h1></div>
            <div>
                <button className="bg-red-500 text-white py-2 px-4 rounded mr-2 " onClick={() => { setCount(count - 1) }}>Decrement</button>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded mr-2" onClick={() => { setCount(initialCount) }}>Reset</button>
                <button className="bg-green-500 text-white py-2 px-4 rounded mr-2" onClick={() => { setCount(count + 1) }}>Increment</button>

            </div>
        </div>
    )
}

export default Counter