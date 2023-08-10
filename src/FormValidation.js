import { useState } from 'react'

function FormValidation() {
    const [user, setUser] = useState("");
    const [pass, setpass] = useState("");
    const [userError, setUserError] = useState(false);
    const [passError, setPassError] = useState(false);

    function loginHandler(e) {
        if (user.length < 3 || pass.length < 3) {
            alert("type corrent values")
        } else {
            alert("all good :)")
        }
        e.preventDefault()
    }
    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserError(true)
        } else {
            setUserError(false)
        }
        setUser(item)
    }
    function passHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setPassError(true)
        } else {
            setPassError(false)
        }
        setpass(item)
    }
    return (
        <div>
            <h1>FormValidation</h1>
            <form onSubmit={loginHandler}>
                <h2>login</h2>
                <input type='text' onChange={userHandler} placeholder='Enter your name' /> {userError ? <span>Invalid Email.!</span> : ""}<br /> <br />
                <input type='password' onChange={passHandler} placeholder='Enter your pass' /> {passError ? <span>Invalid Password.!</span> : ""} <br /> <br />
                <button>Login</button>

            </form>
        </div>
    )
}

export default FormValidation