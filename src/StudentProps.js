import {useState} from 'react'

function StudentProps(props) {
    const [email, setEmail]=useState("demo00@gmail.com");
    return (
        <>
            <div style={{ backgroundColor: "skyBlue", margin: 10, padding: 5 }}>
                <h1>Name: {props.name}</h1>
                <h3>Email: {props.email}</h3>
                <p>Mobile No.: {props.mobile}</p>
            </div>

            <div>
            <h2>{email}</h2>
            <button onClick={()=>{setEmail("change email")}}>Change Email</button>
            </div>
        </>

    )
}

export default StudentProps