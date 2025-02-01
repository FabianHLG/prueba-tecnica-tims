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
    const [popupInfo, setPopupInfo] = useState(null);
    const [filtroAnio, setFiltroAnio] = useState("");

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

    const abrirPopup = (pelicula) => {
        setPopupInfo(pelicula);
    };

    const cerrarPopup = () => {
        setPopupInfo(null);
    };

    const peliculasFiltradas = peliculas.filter((pelicula) =>
        filtroAnio === "" || pelicula.releaseYear >= parseInt(filtroAnio)
    );
    const startIndex = (pagina - 1) * limite;
    const endIndex = startIndex + limite;
    const peliculasPaginadas = peliculasFiltradas.slice(startIndex, endIndex);

    return (
        <div className="peliculas-container">
            <Encabezado />

            <main className="main-content">
                <h1>Películas populares</h1>

                <input className="input-peliculas"
                    type="number"
                    placeholder="Filtrar por año..."
                    value={filtroAnio}
                    onChange={(e) => setFiltroAnio(e.target.value)}
                />

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
                            <a href="" className="pelicula-link" onClick={(e) => { e.preventDefault(); abrirPopup(pelicula); }}>
                                {pelicula.title}
                            </a>
                        </div>
                    ))}
                </div>

                {popupInfo && (
                    <div className="popupmovie">
                        <div className="popup-contentmovie">
                            <button className="close-btnmovie" onClick={cerrarPopup}>X</button>
                            <h2>{popupInfo.title}</h2>
                            <img src={popupInfo.images?.["Poster Art"]?.url} alt={popupInfo.title} />
                            <p>{popupInfo.description}</p>
                            <p><strong>Año:</strong> {popupInfo.releaseYear}</p>
                        </div>
                    </div>
                )}

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
