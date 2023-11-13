import React, {useEffect} from "react";

// import icon ====================> 
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";



// import aos 
import Aos from "aos";
import 'aos/dist/aos.css';

const Info = () => {
  return (
    <>

      <div className="info section">
      <div className="infoContainer container">

        <div className="titleDiv flex">
          <h2  data-aos='fade-right' data-aos-duration='2500' className='h2'>Travel to make memories all around the would</h2>
          <button  data-aos='fade-left' data-aos-duration='2500' className='btn'>View All </button>
        </div>

          <div className="cardsDiv grid">
            <div  data-aos='fade-up' data-aos-duration='4500' className="singleCard grid">
              <div className="iconDiv flex">
                <RxCalendar className='icon'/>
              </div>
              <span className="cardTitle span">Book & Relax</span>
              <p>You can also call airline from your phone and book a flight ticket</p>
            </div>

            <div  data-aos='fade-up' data-aos-duration='4500' className="singleCard grid">
              <div className="iconDiv flex colorTwo">
                <BsShieldCheck className='icon'/>
              </div>
              <span className="cardTitle span">Smart Checklist</span>
              <p>You can also call airline from your phone and book a flight ticket</p>
            </div>

            <div  data-aos='fade-up' data-aos-duration='4500' className="singleCard grid">
              <div className="iconDiv flex colorOne">
                <BsBookmarkCheck className='icon'/>
              </div>
              <span className="cardTitle span">Save More</span>
              <p>You can also call airline from your phone and book a flight ticket</p>
            </div>


          </div>

      </div>
      </div>

    </>
  )
}

export default Info;