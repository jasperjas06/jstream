import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Pages/Login/Login"
import Register from "./components/Register";
import Home from "./components/Home";
// import UploadWidget from './Components/UploadWidget/UploadWidget';
// import UploadImage from './Components/UploadVideo/UploadVideo';
// import Admin from './Pages/Admin/Admin';
import SignIn from "./components/SignIn";
import Stream from "./components/Stream";
import Plan from "./components/Plan";
import Admin from "./components/Admin";
import VideoPlayer from "./components/model/VideoPlayer";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Stream />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/player/:id" element={<VideoPlayer />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
