import './App.css'
import './index.css'
import Login from './LoginRHF.tsx';
import Register from "./RegisterRHF.tsx";
import Home from './HomeRHF.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";




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
                <div className="App">


                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="*" element={<Login/>}/>
                        </Routes>
                    </div>

                </div>
                </body>
            </PrimeReactProvider>
        </BrowserRouter>

    );
}





