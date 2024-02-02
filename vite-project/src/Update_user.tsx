
import {useForm} from "react-hook-form"
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
// @ts-ignore
import error = Simulate.error;
import {Link} from "react-router-dom";




export default function Update_user() {



    type FormValues ={
        new_password: string
        conf_password: string
    }

    const form = useForm<FormValues>({
        defaultValues: {
            new_password: "",
            conf_password: ""
        }
    })

    const {
        register,
        handleSubmit,
        formState,
    } = form;

    // @ts-ignore
    const { errors } = formState;



    const onSubmit = async (data: FormValues) => {

        if  (data.conf_password !== data.new_password){
            alert('Not the same password, confirm password again')
            console.log('Not the same password, confirm password again')
        } else {

            try {
                console.log('USER_UPDATE FORM submited')

                const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

                 await axios.patch('http://127.0.0.1:8000/api/user/update', {
                     new_password: data.new_password,

                 }, {
                     headers: {
                         Authorization: `Bearer ${token}`,
                     },
                 });

            } catch (error) {

                console.error("------------------------------------------------There was an error!", error);
            }
        }
    }



    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)} >

                <h2>Change password</h2>

                <div className="data-container">

                    <label htmlFor="password"> New Password: </label>

                    <input className="inputp"
                           {...register("new_password",
                               {
                                   minLength: {
                                       value: 8,
                                       message: "Minimum password length is 8"
                                   },
                                   required: "Password is required",
                               }
                           )}
                           type="text"
                           id="new password"
                           placeholder={"New Password"}/>

                    <p className="error">{errors.new_password?.message}</p>



                    <label htmlFor="conf password"> Confirm new password: </label>

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
                           id="conf password"
                           placeholder={"Confirm new password"}/>

                    <p className="error">{errors.conf_password?.message}</p>
                    <br/>



                    <button type="submit">Change password</button>


                    <Link to="/home">
                        <button>Back</button>
                    </Link>



                </div>

            </form>
        </>
    )
}

