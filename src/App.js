import React, {useState} from "react";
import './App.css';
import NavBar from "./components/navegation/navegation_bar"
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Slider from "./helpers/slider/slider";
import Booking from "./pages/booking/booking";
import ActivarColor from "./helpers/estado/activarColor";
import CambiarObjetoUsandoPropiedades from "./helpers/estado/playerName";
import Logo from "./assets/Logo_sharing.jpg";
import ServiceUser from "./pages/servicesUser/servicesUser";
import {Router, Route, Routes, Navigate} from "react-router-dom";
import ServiceProvider from "./pages/serviceProvider/serviceProvider";
import UserProfile from "./pages/singUp/singUp";
import NotFound from "./pages/notFound/notfound";
import NavegationReact from "./components/navegation/navegationReact";
import SingUp from "./pages/singUp/singUp";
import SingIn from "./pages/singIn/singIn";
import Language from "./pages/language/language";
import axios from "axios";



function App() {

    const [player, setPlayer] = useState('');
    const isSingUp = true;

  return (
   <>
    <NavBar
           image={Logo}
           singUp = {"Register"}
           singIn = {"LogIn"}
           language = {"Language"}
       />

       <Footer/>

       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/singup" element={<SingUp/>}/>
           <Route path="/singin" element={isSingUp === true ? <SingIn/> : <Navigate to="/singup"/>}/>
           <Route path="/language" element={<Language/>}/>
           <Route path="*" element={<NotFound/>}/>
       </Routes>

   </>
  );
}

export default App;
