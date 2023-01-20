import React from "react";
import './App.css';
import Nav from "./components/navegation/navegation_bar"
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";


function App() {

  return (
   <>
       <body>
       <div className="navegador"><Nav/></div>
       <div className="footer"><Footer/></div>
       <div className="home"><Home/></div>
       </body>

   </>
  );
}

export default App;
