import React, {useEffect} from "react";

// import imge ==========> 
import imgeGrid from "../../assets/Grid.jpg";



// import aos 
import Aos from "aos";
import 'aos/dist/aos.css';


const Lounge = () => {

  // useEffect to set animation 
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <>

    <div className="loung container section">
      <div className="sectionContainer grid">
        
        <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
          <img src={imgeGrid} alt="" className='img' />
        </div>

        <div className="textDiv">
          <h2 data-aos='fade-down' data-aos-duration='2500'>Unaccompanied Minor Lourge</h2>

          <div className="grids grid">

          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='span gridTitle'>
              Help through the airpot
            </span>
            <p>You can also call airline from your phone and book a flight ticket</p>
          </div>

          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='span gridTitle'>
              Care on the flight
            </span>
            <p>You can also call airline from your phone and book a flight ticket</p>
          </div>

          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='span gridTitle'>
              Priority Boarding
            </span>
            <p>You can also call airline from your phone and book a flight ticket</p>
          </div>

          <div className="singleGrid">
            <span className='span gridTitle'>
             Chouffeur-drive service
            </span>
            <p>You can also call airline from your phone and book a flight ticket</p>
          </div>

        </div>
        </div>

        
      </div>
    </div>

    </>
  )
}

export default Lounge;