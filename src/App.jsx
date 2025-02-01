import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Inicio from "./Paginas/Inicio";
import Series from "./Paginas/Series";
import Peliculas from "./Paginas/Peliculas";
import Login from "./Paginas/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/series" element={<Series />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
