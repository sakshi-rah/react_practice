import { useState } from 'react'

function Funstates() {
  let ques = "what is your full name?";
  const [name, setName] = useState(ques);
  const [color, setColor] = useState("-------");
  const [count, setCount] = useState(0);

  function updateName() {
    setName("Sakshi Rahangdale");
  }

  function updateColor() {
    setColor("White color");
  }

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{name}</h2>
      <h3>{color}</h3>
      <button onClick={() => updateName()}>Full Name</button> <br /><br />
      <button onClick={updateColor}>Color</button><br /><br /><br /><br /><br />

      <div>
        <button onClick={decreaseCount}>decrease</button>
        <h2>{count}</h2>
        <button onClick={increaseCount}>increase</button>
      </div>
    </div>
  )
}

export default Funstates