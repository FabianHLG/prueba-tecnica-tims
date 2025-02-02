import React, { useState } from "react";
import { TextField } from "@mui/material";

import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";

import { useNavigate } from "react-router-dom";

import "../Css/Login.css";

import { Encabezado } from "../Componentes/Encabezado";
import { PiePaguina } from "../Componentes/PiePaguina";

const Login = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email }));
    navigate("/");
  };

  return (
    <div className="login-container">

      <Encabezado />

      <main className="login-content">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleLogin} className="login-form">
          <TextField
            label="Nombre Completo"
            variant="standard"
            color="error"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
          <TextField
            label="Correo electrónico"
            type="email"
            variant="standard"
            color="error"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="standard"
            color="error"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </main>

      <PiePaguina />

    </div>
  );
};

export default Login;