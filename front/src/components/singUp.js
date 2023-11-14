import React, { useState } from "react";

const SignUp = () => {
  return (
    <div className="singUp contenedor">
      <label className="label" htmlFor="usuario">Usuario</label>
      <input className="input Name" type="text"></input>
      <label className="label" htmlFor="usuario">Usuario</label>
      <input className="input Name" type="text"></input>
      <label className="label" htmlFor="usuario">Usuario</label>
      <input className="input Name" type="text"></input>
      <label className="label" htmlFor="usuario">Usuario</label>
      <input className="input Pass" type="password"></input>
      <button>Registrar</button>
      <span></span>
      <a className="linkPass" href="#">Terminos y condiciones</a>
    </div>
  );
};

export default SignUp;
