import React, { useEffect, useState } from "react";
import axios from "axios";

import "../Css/Peliculas.css";

import { Encabezado } from "../Componentes/Encabezado";
import { PiePaguina } from "../Componentes/PiePaguina";

const Peliculas = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [pagina, setPagina] = useState(1);
    const [limite, setLimite] = useState(20);

    useEffect(() => {
        axios.get("./sample.json")
            .then((response) => {
                const data = response.data;
                const filteredPeliculas = data.entries.filter(
                    (entry) => entry.programType === "movie" && entry.releaseYear >= 2010
                );
                const ordenPeliculas = filteredPeliculas.sort((a, b) => a.title.localeCompare(b.title));
                setPeliculas(ordenPeliculas);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error al cargar las películas.");
                setLoading(false);
            });
    }, []);

    const startIndex = (pagina - 1) * limite;
    const endIndex = startIndex + limite;
    const peliculasPaginadas = peliculas.slice(startIndex, endIndex);

    return (
        <div className="peliculas-container">
            <Encabezado />

            <main className="main-content">
                <h1>Películas populares</h1>

                {loading && <p>Cargando espere un momento...</p>}
                {error && <p>{error}</p>}

                <label>Mostrar:
                    <select value={limite} onChange={(e) => setLimite(Number(e.target.value))}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                    </select>
                </label>

                <div className="cardpeliculas-container">
                    {peliculasPaginadas.map((pelicula) => (
                        <div className="cardpeliculas" key={pelicula.title}>
                            <img src={pelicula.images?.["Poster Art"]?.url} alt={pelicula.title} />
                            <p>{pelicula.title}</p>
                        </div>
                    ))}
                </div>

                <div className="paginationpeliculas">
                    <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>
                        Anterior
                    </button>
                    <span>Página {pagina}</span>
                    <button onClick={() => setPagina(pagina + 1)} disabled={endIndex >= peliculas.length}>
                        Siguiente
                    </button>
                </div>
            </main>

            <PiePaguina />
        </div>
    );
};

export default Peliculas;
