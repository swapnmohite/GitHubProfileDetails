import React, { useReducer } from 'react'
let initialState = 0;
let reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const UseReducer = () => {

    let [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="bg-blue-500 text-white p-4 flex justify-center items-center">
            <h1 className="text-2xl font-bold p-8">Count: {count}</h1>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md mr-2" onClick={() => dispatch('increment')}>Increment</button>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md mr-2" onClick={() => dispatch('decrement')}>Decrement</button>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md" onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducer