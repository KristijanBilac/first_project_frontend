
import {useForm} from "react-hook-form"
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
// @ts-ignore
import error = Simulate.error;
import {Link} from "react-router-dom";



export default function Home() {


    const form = useForm()

    const {
        handleSubmit,
    } = form;

    const onSubmit = async () => {
        // if (isValid) {
        // try {
        console.log('HOME FORM submited')
        await axios.get('http://127.0.0.1:8000/api/user/home', )
        // } catch {error} {
        //     console.error("There was an error!", error)
        // }
        // }
    }


    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)} >

                <h2>HOME PAGE</h2>

                <div className="login-container">

                    <Link to="/login">
                    <button className="logout_button" type="submit">Logout</button>
                    </Link>

                </div>

            </form>
        </>
    )
}
