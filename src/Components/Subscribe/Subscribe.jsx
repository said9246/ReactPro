import React, {useEffect} from "react";



// import aos 
import Aos from "aos";
import 'aos/dist/aos.css';


const Subscribe = () => {

  // useEffect to set animation 
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <>
      <div className="subscribe section">
        <div data-aos='fade-up' data-aos-duration='4500' className="sectionContainer container">
          <h2>Subscribe News letter & get Latest News</h2>
          <div className="InputDiv flex">
            <input type="text" placeholder='Enter your Email address' className='input'/>
          <button className='btn'>Subscribe</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Subscribe;