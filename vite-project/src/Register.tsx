import Button1 from "./Button.js";
import {useCallback, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Register(){
    const [email, setEmail ] = useState("");

    const handleChangeEmail = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        setEmail(event.currentTarget.value);
    }, [setEmail])

    const [password, setPassword ] = useState("");

    const handleChangePassword = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        setPassword(event.currentTarget.value)
    }, [setPassword])

    const [confPassword, setConfPassword ] = useState("");

    const handleChangeConfPassword = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        setConfPassword(event.currentTarget.value)
    }, [setConfPassword])

    const onClick_register = async ({email, password, confpassword}: { email: any, password: any , confpassword: any  }) => {

        if (confpassword !== password) {
            //throw new Error("search error");
            alert('Not the same password, confirm password again')
            console.log('Not the same password, confirm password again')
        }
        else {

            console.log('REGISTEEEEEER1111111')

            await axios.post('http://127.0.0.1:8000/api/auth/sign-up', {
                email: email,
                password: password
            })
            console.log("REGISTER2222222", {
                email: email,
                password: password
            })
        }
    }

    return(
        <>

            <h2>Register</h2>


            <div className="login-container">

                <h3>Create account</h3>

                <input value={email} onChange={handleChangeEmail}
                       placeholder={"Email/Username"}/> <br/>

                <input value={password} onChange={handleChangePassword}
                       placeholder={"Password"}/> <br/>

                <input value={confPassword} onChange={handleChangeConfPassword}
                       placeholder={"Confirm Password"}/> <br/> <br/>

                <Button1 name="Register" onClick={() => onClick_register({email: email, password: password, confpassword: confPassword})}/>

                <Link to ="/"> <button> Back to login </button> </Link>

            </div>


        </>
    )
    }

    export default Register