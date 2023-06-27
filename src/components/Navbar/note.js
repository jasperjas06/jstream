import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Home from "./Pages/Home/Home"
import UploadWidget from './Components/UploadWidget/UploadWidget';
import UploadImage from './Components/UploadVideo/UploadVideo';
import Admin from './Pages/Admin/Admin';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<Home />}/>
                    <Route path="/login" element={<Login /> } />
                    <Route path="/register" element={<Register /> } />
                    <Route path="/admin" element={<Admin /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
