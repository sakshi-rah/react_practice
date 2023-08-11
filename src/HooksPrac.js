import style from "./Custom.module.css"
import React, { useState, useEffect } from 'react'

function HooksPrac() {
    const [count, setCount] = useState(100);
    const [data, setData] = useState(10)
    useEffect(() => {
        console.warn("useEffect is called")
    }, [data])
    return (
        <div>
            <h1 className={style.success}>Count : {count}</h1>
            <h2 className={style.warning}>Data : {data}</h2>

            <button onClick={()=>setCount(count+1)} 
            style={{color:"black",border:"none", backgroundColor:"skyblue",padding:10, margin:20, borderRadius:20}}>Update Count</button> 
            <button onClick={()=>setData(data+1)} className={style.button}>Update Data</button>

        </div>
    )
}

export default HooksPrac