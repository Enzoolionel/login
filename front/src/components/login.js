import React, { useState } from "react";

const Login = () => {

  return (
    <div className="login contenedor">
      <label className="label" htmlFor="usuario">Usuario</label>
      <input id="usuario" className="input Name" type="text"></input>
      <label className="label" htmlFor="contraseña">Contraseña</label>
      <input id="contraseña" className="input Pass" type="password"></input>
      <span className="span">Contraseña incorrecta</span>
      <button className="button">Enviar</button>
      <hr/>
      <a className="linkPass" href="#">Olvidate tu contraseña</a>
    </div>
  );
};

export default Login;

