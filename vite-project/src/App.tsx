import './App.css'
import Login from './Login.tsx';
import Register from "./Register.tsx";
import Home from './Home.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Update_user from "./Update_user.tsx";




export default function App() {

    return (

        <BrowserRouter>
            <PrimeReactProvider>

                <header>
                <div className="Welcome">
                    <h1>Welcome to my app</h1>
                </div>
                </header>


                <body>

                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/update_user" element={<Update_user/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="*" element={<Login/>}/>
                        </Routes>
                    </div>

                </body>
            </PrimeReactProvider>
        </BrowserRouter>

    );
}





