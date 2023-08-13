import React,{forwardRef} from 'react'

function UseRefHook_InputBox(props,inputRef) {
  return (
    <div>
        <h1>forwardRef Hook</h1>
        <input type='text' ref={inputRef}/>
    </div>
  )
}

export default forwardRef (UseRefHook_InputBox)
//forwardRef is use for getting info child to parent 