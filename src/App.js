import React from 'react';
// import Navbar from './Components/Navbar/Navebar';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Support from './Components/Support/Support';
import Info from './Components/Info/Info';
import Lounge from './Components/Louage/Lounge';
import Travels from './Components/Travelers/Travels';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Home/>
    <Search/>
    <Support/>
    <Info/>
    <Lounge/>
    <Travels/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default App