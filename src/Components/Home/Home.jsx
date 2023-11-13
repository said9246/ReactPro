import React, {useEffect} from "react";

// import imge
import takeOff from "../../assets/take off.png.png";
import videp from "../../assets/videp.mp4";


// import aos 
import Aos from "aos";
import 'aos/dist/aos.css';




const Home = () => {
// useEffect to set animation 
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])



  return (
    <>
      <div className="home flex container">
        <div className="mainText">
          <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories with Us</h1>
        </div>

        <div data-aos='fade-down' data-aos-duration='2500' className="homeImage flex">
          <div className="videoDiv">
            <video src={videp} autoPlay muted loop className="video"></video>
          </div>

          <img src={takeOff} className="plane img" />
        </div>
      </div>
    </>
  );
};

export default Home;
