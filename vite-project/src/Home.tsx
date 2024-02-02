
import {useForm} from "react-hook-form"
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
// @ts-ignore
import error = Simulate.error;
import {Link} from "react-router-dom";
import { useState } from "react";



// axios.interceptors.response.use(async (req, res) => {
//     console.log(res)
//     if (res.status === 401) {
//         // logout
//     }
//     return res;
// })

export default function Home() {

    // const navigate = useNavigate();

    // axios.interceptors.response.use(async (req,res) => {
    //     console.log(res)
    //     if (res.status === 401){
    //         navigate("/login");
    //     }
    //     return res;
    //
    // })

    const [data, setData] = useState<Array<{ id: number; email: string; password: string }>>([]);

    const form = useForm()

    const {
        handleSubmit,
    } = form;

    const onSubmit = async () => {

        try {
            console.log('HOME FORM submited')

            const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

            const response = await axios.get('http://127.0.0.1:8000/api/user/home', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 200) {
                setData(response.data)
            }

        } catch (error) {
            console.error("There was an error!", error);
    }
    }

    const onDeleteAllData = async () => {
        try {
            setData([]);
            console.log("All data deleted");
        } catch (error) {
            console.error("Error deleting data", error);
        }
    };


    // @ts-ignore
    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)} >

                <h2>HOME PAGE</h2>

                <div className="data-container">


                    <button type="submit">Get Data</button>

                    <button type="button" onClick={onDeleteAllData}>
                        Delete All Data
                    </button>

                    <Link to="/update_user">
                        <button>Change password</button>
                    </Link>

                    <Link to="/login">
                        <button>Logout</button>
                    </Link>

                    <div>
                        <h3>Fetched Data:</h3>
                        {data.length > 0 ? (
                            <ul>
                                {data.map((item) => (
                                    <li key={item.id}>
                                        <p>Email: {item.email}</p>
                                        <p>Password: {item.password}</p>
                                        <p>ID: {item.id}</p>
                                        <hr/>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No data fetched yet.</p>
                        )}
                    </div>


                </div>

            </form>
        </>
    )
}
