import React, { useState } from "react";
import Login from "./login";
import SignUp from "./singUp";
import "../styles/main.css";

const MainCard = () => {
    const [render, setRender] = useState("Login");
    const [selected, setSelected] = useState("login"); // Inicialmente, establece 'login' como seleccionado
  
    const handleButtonClick = (buttonType) => {
      setRender(buttonType);
      setSelected(buttonType.toLowerCase()); // Actualiza la clase seleccionada al tipo de botón clicado
    };
  
    return (
      <div className="main">
        <div className="boxButton">
          <h2 onClick={() => handleButtonClick("Login")} className={`selectButton ${selected === "login" ? "selected" : ""}`}>Login</h2>
          <h2 onClick={() => handleButtonClick("SignUp")} className={`selectButton ${selected === "signup" ? "selected" : ""}`}>Sign up</h2>
        </div>
        {render === "Login" ? <Login /> : <SignUp />}
      </div>
    );
  };
export default MainCard;
