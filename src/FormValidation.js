import { useState } from 'react'
import { Button, Form , InputGroup } from 'react-bootstrap';
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
        <div style={{ width: 500, padding:30, margin: 50, backgroundColor: "skyblue" }}>
              <h2>login</h2> <br/>
            <form onSubmit={loginHandler}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={userHandler}
                    />
                </InputGroup>
                {userError ? <span>Invalid Email.!</span> : ""}

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                        onChange={passHandler}
                    />
                </InputGroup>
                {passError ? <span>Invalid Password.!</span> : ""} <br/>
                <Button variant='warning'>Login</Button>

            </form>
        </div>
    )
}

export default FormValidation