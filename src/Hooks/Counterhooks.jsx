import React, { useState } from "react";

const Counterhooks = () => {
    const [count, setCount] = useState(0); // 0 is the initial value of count

    return (
        <div className='py-2 px-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded py-2 px-4'
                onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>)
    // setCount is the function that will update the value of count
};
export default Counterhooks;
