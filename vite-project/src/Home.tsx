import Button1 from "./Button.tsx";
import {useCallback, useState} from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'



export default function Home() {

    const [email, setEmail ] = useState("");

    const handleChangeEmail = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        setEmail(event.currentTarget.value);
    }, [setEmail])

    const [password, setPassword ] = useState("");

    const handleChangePassword = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        setPassword(event.currentTarget.value)
    }, [setPassword])


    const onClick_login = async ({email, password}: { email: any, password: any }) => {
        console.log('LOGIN11111111')
        await axios.post('http://127.0.0.1:8000/api/user/login', {
            email: email,
            password: password
        })

        console.log("LOGIN222222222", {
            email: email,
            password: password
        })
    }


    return (

        <>

            <h2>Login</h2>


            <div className="login-container">
                <input value={email} onChange={handleChangeEmail}
                       placeholder={"Email/Username"}/>
                &nbsp;
                <input value={password} onChange={handleChangePassword}
                       placeholder={"Password"}/>
                <p></p>

                <Button1 name="Login" onClick={() => onClick_login({email: email, password: password})}/>

                <Link to="/register">   <button> Register </button> </Link>
            </div>
        </>
    )
}

