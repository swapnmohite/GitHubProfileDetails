import React, { useState } from 'react'


const UseArray1 = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [items, setItems] = useState(arr);

    return (
        <div>
            <h1>{items[0]}</h1>
        </div>
    );
};

export default UseArray1;