import React, {useEffect} from "react";

// import imges==============>
import paris1 from "../../assets/paris1.jpeg";
import paris2 from "../../assets/paris2.jpeg";
import paris3 from "../../assets/paris3.jpg";
import paris4 from "../../assets/paris4.jpeg";
import user1 from "../../assets/user 1.jpeg";

//we are going to use high order array methode called map t0 display the date===>

// import aos 
import Aos from "aos";
import 'aos/dist/aos.css';



const travelers = [
  {
    id: 1,
    distinationImge: paris1,
    travelerImage: user1,
    travelerName: "IsraTech",
    sociallink: "IsraTech8",
  },
  {
    id: 2,
    distinationImge: paris2,
    travelerImage: user1,
    travelerName: "Wilson",
    sociallink: "@wilsonlandsey",
  },
  {
    id: 3,
    distinationImge: paris3,
    travelerImage: user1,
    travelerName: "Nicol Web",
    sociallink: "@nicol",
  },
  {
    id: 4,
    distinationImge: paris4,
    travelerImage: user1,
    travelerName: "Naresh Web",
    sociallink: "@Naresh",
  },
];




const Travels = () => {

  // useEffect to set animation 
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <>
      <div className="travelers container section">
        <div className="sectionContainer">
          <h2  data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month!</h2>

          <div className="travelerContainer grid">
            

            {travelers.map(({id,distinationImge,travelerImage,travelerName,sociallink}) => {
              {/* single passanger card  */}
              return (
                <div  data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                  <img src={distinationImge} alt="" className="distinationImge" />
                  <div className="travelerDetails">
                    <div className="travelerPictur">
                      <img src={travelerImage} alt="" className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span className="span">{travelerName}</span>
                      <p className="p">{sociallink}</p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default Travels;
