import './App.css'
import './index.css'
import Home from './HomeRHF.tsx';
import Register from "./RegisterRHF.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";




export default function App() {

    return (

        <BrowserRouter>
            <PrimeReactProvider>
                <div className="App">

                 <div className="Welcome">
                     <h1>Welcome to my app</h1>
                 </div>

                 <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="*" element={<Home/>}/>
                    </Routes>
                 </div>

                </div>
            </PrimeReactProvider>
        </BrowserRouter>

    );
}





