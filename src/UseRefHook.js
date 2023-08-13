import React, { useRef } from 'react'

function UseRefHook() {
    let inputRef = useRef(null)
    function handleInput(){
        console.warn("function called");
        inputRef.current.value = 1010;
        inputRef.current.focus();
        inputRef.current.style.color = "red";
        inputRef.current.style.backgroundColor = "pink";
        inputRef.current.style.width = "300px";

    }
  return (
    <>
            <h1>UserefHook</h1>
<input type='text' ref={inputRef}/>
            <button style={{margin: 10}} onClick={handleInput}> Handle Input</button>

        </>
  )
}

export default UseRefHook
// USEREF HOOK USE FOR MODIFY VALUES 