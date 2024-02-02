import {FieldErrors, useForm} from "react-hook-form"
import { DevTool} from "@hookform/devtools";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
// @ts-ignore
import error = Simulate.error;
import {Link} from 'react-router-dom'

export default function Register() {

    type FormValues ={
        email: string
        password: string
        conf_password: string
    }

    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: "",
            conf_password: ""
        }
    })

    const {
        register,
        control,
        handleSubmit,
        formState,
    } = form;

    // @ts-ignore
    const { errors } = formState;
    const onSubmit = async (data: FormValues) => {

        if  (data.conf_password !== data.password){
            alert('Not the same password, confirm password again')
            console.log('Not the same password, confirm password again')
        } else {

            try {

                console.log('Form submited', data)
                await axios.post('http://127.0.0.1:8000/api/auth/sign-up', {
                    email: data.email,
                    password: data.password
                })

            }catch (error) {
                console.error("There was an error!", error)
            }
        }
    }
    const onError = (errors: FieldErrors<FormValues>) => {
        console.log("Form errors", errors);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError) } noValidate>

                <div className="title-for_container">
                <h2>Register</h2>
                </div>

                <div className="login-container">

                    <label htmlFor="email"> Email: </label>

                    <input
                        {...register("email", {
                            pattern: {
                                value: /^[A-Za-z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-z0-9!-]+)*$/,
                                message: "Invalid email format",
                            },
                            required: "Email is required"
                        })
                        }
                        type="email"
                        id="email"
                        placeholder="Email"
                    />
                    <p className="error">{errors.email?.message}</p>



                    <label htmlFor="password"> Password: </label>

                    <input className="inputp"
                           {...register("password",
                               {
                                   minLength: {
                                       value: 8,
                                       message: "Minimum password length is 8"
                                   },
                                   required: "Password is required",
                               }
                           )}
                           type="text"
                           id="password"
                           placeholder={"Password"}/>

                    <p className="error">{errors.password?.message}</p>



                    <label htmlFor="conf_password"> Confirm password: </label>

                    <input className="inputcp"
                           {...register("conf_password",
                               {
                                   minLength: {
                                       value: 8,
                                       message: "Minimum password length is 8"
                                   },
                                   required: "Password is required",
                               }
                           )}
                           type="text"
                           id="conf_password"
                           placeholder={"Confirm password"}/>

                    <p className="error">{errors.conf_password?.message}</p>
                    <br/>


                    <button type="submit">Create Account</button>


                    <Link to="/">
                        <button type="button">Back to login</button>
                    </Link>


                </div>
                <DevTool control={control}/>
            </form>
        </>
    )


}