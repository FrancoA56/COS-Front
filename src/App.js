import React from "react";
import Home from "./components/home";
import Contact from "./components/contact";
import AcercaDe from "./components/acercaDe";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/acercaDe" element={<AcercaDe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
