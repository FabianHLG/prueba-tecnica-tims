import React, { useEffect, useState } from "react";
import axios from "axios";

import "../Css/Peliculas.css";

import { Encabezado } from "../Componentes/Encabezado";
import { PiePaguina } from "../Componentes/PiePaguina";

const Peliculas = () => {
    const [Peluculas, setPeluculas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("./sample.json")
            .then((response) => {
                const data = response.data;
                const filteredPeluculas = data.entries.filter(
                    (entry) => entry.programType === "movie" && entry.releaseYear >= 2010
                );
                const ordenPeluculas = filteredPeluculas.sort((a, b) => a.title.localeCompare(b.title));
                setPeluculas(ordenPeluculas.slice(0, 20));
                setLoading(false);
            })
            .catch((err) => {
                setError("Error al cargar las Peluculas.");
                setLoading(false);
            });
    }, []);

    return (
        
        <div className="peliculas-container">

            <Encabezado />

            <main className="main-content">
                <h1>Peliculas populares</h1>
                {loading && <p>Cargando espere un momento...</p>}
                {error && <p>{error}</p>}
                <div className="cardpeliculas-container">
                    {Peluculas.map((pelicula) => (
                        <div className="cardpeliculas" key={pelicula.title}>
                            <img src={pelicula.images?.["Poster Art"]?.url} alt={pelicula.title} />
                            <p>{pelicula.title}</p>
                        </div>
                    ))}
                </div>
            </main>

            <PiePaguina />
            
        </div>
    );
};

export default Peliculas;