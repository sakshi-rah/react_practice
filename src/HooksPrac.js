import React, { useState, useEffect } from 'react'

function HooksPrac() {
    const [count, setCount] = useState(100);
    const [data, setData] = useState(10)
    useEffect(() => {
        console.warn("useEffect is called")
    }, [data])
    return (
        <div>
            <h1>Count : {count}</h1>
            <h2>Data : {data}</h2>

            <button onClick={()=>setCount(count+1)}>Update Count</button> 
            <button onClick={()=>setData(data+1)}>Update Data</button>

        </div>
    )
}

export default HooksPrac