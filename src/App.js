import React from "react";
import './App.css';
import Nav from "./components/navegation/navegation_bar"
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";

function App() {
  return (
   <>

       <body>
           <div>
               <Nav/>
           </div>

           <div>
               <Home/>
           </div>

           <div>
               <Footer/>
           </div>
       </body>


   </>
  );
}

export default App;
