import React,{useState} from "react";

//import icons  ========>
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

//import image  ==============>
import logo from "../../assets/flightlogo.png";

const Navbar = () => {
  // Let us remove the navbar with small width
  const [active, setActive] = useState('navBarMenu')
  const showNavBar = ()=> {
    setActive("navBarMenu showNavBar");
  }
  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  // Let us add a background color to the second nave bar ====>  ye sara wrong hai
  const [nobg, addBg] = useState('navBarTwo')
  const addBgColor = ()=> {
    if(window.scrollY >=10){
      addBg("navBarTwo navBar_with_Bg");
    }else{
      addBg("navBarTwo ");
    }
  }
  window.addEventListener('scroll', addBgColor)


  return (
    <>
      <div className="navBar flex">
        <div className="navBarOne flex">
          <div>
            <SiConsul className="icon" />
          </div>

          <div className="none flex">
            <li className="flex">
              <BsPhoneVibrate className="icon" />
              Support
            </li>
            <li className="flex">
              <AiOutlineGlobal className="icon" />
              Language
            </li>
          </div>

          <div className="atb flex">
            <span className="span">Sign in</span>
            <span className="span">Sign up</span>
          </div>
        </div>
        
        <div className={nobg} >
          <div className="logoDiv">
            <img src={logo} className="logo" />
          </div>

          <div className={active}>
            <ul className="menu flex">
              <li onClick={removeNavBar} className="listItem">
                Home
              </li>
              <li onClick={removeNavBar} className="listItem">
                About
              </li>
              <li onClick={removeNavBar} className="listItem">
                Offers
              </li>
              <li onClick={removeNavBar} className="listItem">
                Seats
              </li>
              <li onClick={removeNavBar} className="listItem">
                Destination
              </li>
            </ul>

            <button onClick={removeNavBar} className="btn flex btnOne">
              contact
            </button>
          </div>

          <button className="btn flex btnTwo">contact</button>

          <div onClick={showNavBar} className="toggleIcon">
            <CgMenuGridO className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
