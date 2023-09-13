import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    let [count, setcount] = useState(0);
    let [name, setname] = useState({ name: "", email: "" });


    useEffect(() => {
        document.title = `chat ${count}`;
        console.log("inside useEffect");
    }, [count])

    return (
        <div>
            <input type="text" value={name.name} onChange={(e) => { setname({ ...name, name: e.target.value }) }} />
            <input type="text" value={name.email} onChange={(e) => { setname({ ...name, email: e.target.value }) }} />
            <h1>{count}</h1>
            <button onClick={() => { setcount(count + 1) }}>Click</button>
        </div>
    )
}

export default UseEffect2