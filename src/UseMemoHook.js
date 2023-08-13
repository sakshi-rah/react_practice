import React, { useState, useMemo } from 'react'

function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0)

    const multiCountMemo = useMemo(()=>{
        console.log("multiCountMemo")
        return item*2;
    },[item])
    return (
        <>
            <h1>UseMemoHook</h1>

            <h2>count:{count}</h2>
            <h2>item:{item}</h2>
            <h3>{multiCountMemo}</h3>
            <button style={{margin:10}} onClick={()=>setCount(count+1)}> Update Count</button>
            <button onClick={()=>setItem(item+1)}> Update Item</button>

        </>
    )
}

export default UseMemoHook
//useMemo hook use for stoping rerender the componant 