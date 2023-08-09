import { useState } from 'react'

function FormDemo() {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getData(event) {
        setData(event.target.value);
        setPrint(false)
    }
    return (
        <div>
            <h1>Get input </h1>
            <input type='text' onChange={getData} />
            <button onClick={() => { setPrint(true) }}>Print</button>
            {
                print ? <h3>{data}</h3> : null
            }
        </div>
    )
}

export default FormDemo