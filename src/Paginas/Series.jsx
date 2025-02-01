import React, { useEffect, useState } from "react";
import axios from "axios";

import "../Css/Series.css";

import { Encabezado } from "../Componentes/Encabezado";
import { PiePaguina } from "../Componentes/PiePaguina";

const Series = () => {
    const [series, setSeries] = useState([]);
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
                const filteredSeries = data.entries.filter(
                    (entry) => entry.programType === "series" && entry.releaseYear >= 2010
                );
                const ordenSeries = filteredSeries.sort((a, b) => a.title.localeCompare(b.title));
                setSeries(ordenSeries);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error al cargar las series.");
                setLoading(false);
            });
    }, []);

    const abrirPopup = (serie) => {
        setPopupInfo(serie);
    };

    const cerrarPopup = () => {
        setPopupInfo(null);
    };

    const seriesFiltradas = series.filter((serie) => 
        filtroAnio === "" || serie.releaseYear >= parseInt(filtroAnio)
    );
    const startIndex = (pagina - 1) * limite;
    const endIndex = startIndex + limite;
    const seriesPaginadas = seriesFiltradas.slice(startIndex, endIndex);    

    return (
        <div className="series-container">
            <Encabezado />

            <main className="main-content">
                <h1>Series populares</h1>

                <input className="input-series"
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

                <div className="cardseries-container">
                    {seriesPaginadas.map((serie) => (
                        <div className="cardseries" key={serie.title}>
                            <img src={serie.images?.["Poster Art"]?.url} alt={serie.title} />
                            <a href="" className="serie-link" onClick={(e) => { e.preventDefault(); abrirPopup(serie); }}>
                                {serie.title}
                            </a>
                        </div>
                    ))}
                </div>

                {popupInfo && (
                    <div className="popupserie">
                        <div className="popup-contentserie">
                            <button className="close-btnserie" onClick={cerrarPopup}>X</button>
                            <h2>{popupInfo.title}</h2>
                            <img src={popupInfo.images?.["Poster Art"]?.url} alt={popupInfo.title} />
                            <p>{popupInfo.description}</p>
                            <p><strong>Año:</strong> {popupInfo.releaseYear}</p>
                        </div>
                    </div>
                )}

                <div className="paginationseries">
                    <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>
                        Anterior
                    </button>
                    <span>Página {pagina}</span>
                    <button onClick={() => setPagina(pagina + 1)} disabled={endIndex >= series.length}>
                        Siguiente
                    </button>
                </div>
            </main>

            <PiePaguina />
        </div>
    );
};

export default Series;



