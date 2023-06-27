import "./HomeStyles.css";
import ImgSlider from "./ImageSlider";
import Navbar from "./Navbar/Navbar";
import Player from "./Player";
import Viewers from "./Viewer";
const Stream = () => {
    return (
        <div >
        <Navbar/>
        {/* <ImgSlider/> */}
            <Viewers/>
        <div className="streamHome">
            <Player/>
        </div>
        </div>
        
    );
}

export default Stream;