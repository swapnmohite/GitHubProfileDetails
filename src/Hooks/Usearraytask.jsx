import React, { useState } from "react";

const Usearraytask = () => {
    const [items, setItems] = useState([]);
    console.log(items);

    const addItem = () => {
        setItems([
            ...items, //   
            {
                id: items.length,
                value: Math.floor(Math.random() * 10 + 1),
            },
        ]);
    };

    return (
        <div>
            <button onClick={addItem}>Add button</button>
            <ul>
                {items.map((data) => (
                    <li key={data.id}>{data.id} : {data.value}</li>
                ))}
            </ul>
        </div>
    );
};

export default Usearraytask;
