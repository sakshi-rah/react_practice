import React, { useRef } from 'react'
import InputBox from './UseRefHook_InputBox';

function UseRefHook() {
    let inputRef = useRef(null)
    let inputForRef =useRef(null)

    function handleInput() {
        console.warn("function called");
        inputRef.current.value = 1010;
        inputRef.current.focus();
        inputRef.current.style.color = "red";
        inputRef.current.style.backgroundColor = "pink";
        inputRef.current.style.width = "300px";

    }

    function handleForInput(){
        inputForRef.current.value = "4000";
        inputForRef.current.focus();
        inputForRef.current.style.fontSize = "25px"
        inputForRef.current.style.backgroundColor = "yellow";

    }
    return (
        <>
            <h1>UserefHook</h1>
            <input type='text' ref={inputRef} />
            <button style={{ margin: 10 }} onClick={handleInput}> Handle Input</button>
            
            <InputBox ref={inputForRef}/>
            <button style={{ margin: 20 }} onClick={handleForInput}> Handle Forward Input</button>


        </>
    )
}

export default UseRefHook
// USEREF HOOK USE FOR MODIFY VALUES 