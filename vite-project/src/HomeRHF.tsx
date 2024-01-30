
import {FieldErrors, useForm} from "react-hook-form"
import { DevTool} from "@hookform/devtools";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
// @ts-ignore
import error = Simulate.error;
import {Link} from 'react-router-dom'


export default function Home() {


        type FormValues = {
                email: string
                password: string
        }

        const form = useForm<FormValues>({
            defaultValues: {
                email: "",
                password: ""
            }
        })


        const {
            register,
            control,
            handleSubmit,
            formState,
        } = form;

        // @ts-ignore
        const { isValid, errors,isDirty } = formState;

        const onSubmit = async (data: FormValues) => {
            // if (isValid) {
            // try {
            console.log('Form submited', data)
            await axios.post('http://127.0.0.1:8000/api/user/login', {
                email: data.email,
                password: data.password
            })
            // } catch {error} {
            //     console.error("There was an error!", error)
            // }
            // }
        }
        const onError = (errors: FieldErrors<FormValues>) => {
                    console.log("Form errors", errors);
            }


    return (

        <>
            <form onSubmit={handleSubmit(onSubmit , onError)} noValidate>

                <h2>Login</h2>

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
                           {...register("password", {
                                   required: "Password is required",
                               }
                           )}
                           type="text"
                           id="password"
                           placeholder={"Password"}/>

                    <p className="error">{errors.password?.message}</p>



                    <button type="submit">Login</button>

                    <Link to="/register">
                        <button type="button">Register</button>
                    </Link>


                </div>
                <DevTool control={control}/>
            </form>
        </>
    )
}
