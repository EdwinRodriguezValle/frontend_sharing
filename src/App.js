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
import {Router, Route, Routes} from "react-router-dom";
import ServiceProvider from "./pages/serviceProvider/serviceProvider";
import UserProfile from "./pages/singUp/singUp";
import NotFound from "./pages/notFound/notfound";
import NavegationReact from "./components/navegation/navegationReact";
import SingUp from "./pages/singUp/singUp";
import SingIn from "./pages/singIn/singIn";
import Language from "./pages/language/language";




function App() {

    const [player, setPlayer] = useState('');

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
           <Route path="/singIn" element={<SingIn/>}/>
           <Route path="/language" element={<Language/>}/>
           <Route path="*" element={<NotFound/>}/>
       </Routes>




       {/*< >*/}
       {/*    <h1>{player} is aan de beurt</h1>*/}
       {/*    <Button playerName="Bart" handlePlayerChange={setPlayer}/>*/}
       {/*    <Button playerName="Piet" handlePlayerChange={setPlayer}/>*/}
       {/*    <Button playerName="Marie" handlePlayerChange={setPlayer}/>*/}
       {/*</>*/}


       {/*<Slider textLabel="volume" minRange="10" maxRange="11"/>*/}
       {/*<Slider textLabel="bass" minRange="0" maxRange="4"/>*/}
       {/*<Slider textLabel="treble" minRange="1" maxRange="5"/>*/}
       {/*<Slider textLabel="corazones" minRange="20" maxRange="100"/>*/}










   </>
  );
}

export default App;
