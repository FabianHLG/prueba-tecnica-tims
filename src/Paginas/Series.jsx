import React, { useEffect, useState } from "react";
import axios from "axios";

import "../Css/Series.css";

import { Encabezado } from "../Componentes/Encabezado";
import { PiePaguina } from "../Componentes/PiePaguina";

const Series = () => {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("./sample.json")
            .then((response) => {
                const data = response.data;
                const filteredSeries = data.entries.filter(
                    (entry) => entry.programType === "series" && entry.releaseYear >= 2010
                );
                const ordenSeries = filteredSeries.sort((a, b) => a.title.localeCompare(b.title));
                setSeries(ordenSeries.slice(0, 20));
                setLoading(false);
            })
            .catch((err) => {
                setError("Error al cargar las series.");
                setLoading(false);
            });
    }, []);

    return (
        
        <div className="series-container">

            <Encabezado />

            <main className="main-content">
                <h1>Series populares</h1>
                {loading && <p>Cargando espere un momento...</p>}
                {error && <p>{error}</p>}
                <div className="cardseries-container">
                    {series.map((serie) => (
                        <div className="cardseries" key={serie.title}>
                            <img src={serie.images?.["Poster Art"]?.url} alt={serie.title} />
                            <p>{serie.title}</p>
                        </div>
                    ))}
                </div>
            </main>

            <PiePaguina />
            
        </div>
    );
};

export default Series;


