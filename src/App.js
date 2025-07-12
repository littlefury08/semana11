import React from "react";
import "./index.css";
import Header from "./components/header.jsx";
import HeroSection from "./components/modelo.jsx";
import SearchBar from "./components/busqueda.jsx";
import MensualidadTable from "./components/tabla.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Sistema de Mensualidades" />
      <div className="border-2 border-black">
        <HeroSection 
          title="Mensualidad" 
          subtitle="Conjunto Residencial"
          backgroundImage="/images/apartamento.png"
        />
        <div className="flex border-2 border-black m-4">
          <div className="flex-1 p-4">
            <SearchBar placeholder="Buscar residente..." onSearch={() => {}} />
            <MensualidadTable />
          </div>
        </div>
      </div>
      <Footer companyName="Conjunto Residencial Premium" year={2024} />
    </div>
  );
}

export default App;