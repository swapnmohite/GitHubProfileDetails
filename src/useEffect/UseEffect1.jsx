import React, { useEffect } from 'react'

const useEffect1 = () => {
    useEffect(() => {
        console.log("Hello useEffect Hook");
    })

    console.log("Hello outside from Hook");

    return (
        <div>
            <h1>
                Hello UseEffect Hook
            </h1>
        </div>
    )
}

export default useEffect1