import React from "react";

import "../Css/Inicio.css";

import {Encabezado} from "../Componentes/Encabezado";
import {PiePaguina} from "../Componentes/PiePaguina";

const Inicio = () => {
  return (
    <div className="inicio-container">

      <Encabezado />

      <main className="main-content">
        <h1>Bienvenid@ a Demo Streaming</h1>
        <p>Eliga una categoría para disfrutar</p>
        <div className="cards-container">
          <a href="/series" className="card">Series</a>
          <a href="/peliculas" className="card">Películas</a>
        </div>
      </main>

      <PiePaguina />

    </div>
  );
};

export default Inicio;

