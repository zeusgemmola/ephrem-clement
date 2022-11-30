import React from "react";
import AppBar from "./components/AppBar/AppBar.js";
import Convertisseur from "./components/Convertisseur.js";
import NotFound from "./components/NotFound.js";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Convertisseur />} />
        <Route path="/with404" element={<Convertisseur />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/NotFound" />} />
      </Routes>
    </main>
  </div>
);

export default App;
