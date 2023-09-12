import React, { useState } from 'react'

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    let [ctime, setCtime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime, 1000)
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <h1 className="text-6xl mb-8 p-4 border border-spacing-9 rounded-lg bg-indigo-500 text-white">{ctime}</h1>
        </div>
    )
}

export default Clock