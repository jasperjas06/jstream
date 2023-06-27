import "./HomeStyles.css";
import Navbar from "./Navbar/Navbar";

function Home() {
  return (
    <>
    <div className="Home_01">
      <Navbar/>
        <div className="hero">
          <h1>Stream <span id="nw">Now</span></h1>
          <img alt="logo" src="/images/cta-logo-two.png"/>
          {/* <div className="Home2">

          </div> */}
        </div>
    </div>
    </>
  );
}

export default Home;
