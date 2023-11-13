import React, {useEffect} from "react";

import logo from "../../assets/flightlogo.png";
// impor icon =========> 
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";


// import aos 
import Aos from "aos";
import 'aos/dist/aos.css';

const Footer = () => {

  // useEffect to set animation 
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <>
      <div className="footer">
        <div className="sectionContainer container grid">

          <div data-aos='fade-up' data-aos-duration='2500' className="gridOne">
            <div className="logoDiv">
              <img src={logo} alt="" className='logo' />
            </div>
            <p>Your mind should be stronger than your feeling, fly!</p>
            <div className="socialIcon flex">
                <TiSocialFacebook className='icon'/>
                <TiSocialTwitter className='icon'/>
                <TiSocialYoutube className='icon'/>
                <TiSocialPinterest className='icon'/>

            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className="footerLink">
            <span className="linkTitle">
              Information
            </span>
              <li>
                <a href="">Home</a>
              </li>

              <li>
                <a href="">Explore</a>
              </li>

              <li>
                <a href="">Flight Station</a>
              </li>

              <li>
                <a href="">Travel</a>
              </li>

              <li>
                <a href="">Check-In</a>
              </li>

              <li>
                <a href="">Manage Your booking</a>
              </li>

          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className="footerLink">
            <span className="linkTitle">
              Quick Guide
            </span>
              <li>
                <a href="">FAQ</a>
              </li>

              <li>
                <a href="">HOW to</a>
              </li>

              <li>
                <a href="">Features</a>
              </li>

              <li>
                <a href="">Baggage</a>
              </li>

              <li>
                <a href="">Route Map</a>
              </li>

              <li>
                <a href="">Your communication</a>
              </li>

          </div>


          <div data-aos='fade-up' data-aos-duration='2500' className="footerLink">
            <span className="linkTitle">
              Information
            </span>
              <li className="li">
                <a  href="">Chauffuer</a>
              </li>

              <li>
                <a href="">Our Patner</a>
              </li>

              <li>
                <a href="">destination</a>
              </li>

              <li>
                <a href="">Careers</a>
              </li>

              <li>
                <a href="">transporation</a>
              </li>

              <li>
                <a href="">Programme Rule</a>
              </li>

          </div>


        </div>


        <div className="copyRightDiv flex">
          <p>
            Courtesy Design | Developed by <a href="">IsraTech</a>
          </p>
        </div>


      </div>
    </>
  )
}

export default Footer;