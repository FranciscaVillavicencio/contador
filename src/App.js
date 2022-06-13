import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componentes/Header.jsx";
import AddContador from "./componentes/AddContador";
import ListContadores from "./componentes/ListContadores";





function App() {

 const savedContadores = 
  localStorage.getItem('listaContadores') ?
  JSON.parse (localStorage.getItem('listaContadores')) : [];
  

  const [contadores, agregarContador] = useState(savedContadores);

  useEffect(() => {
    localStorage.setItem("listaContadores", JSON.stringify(contadores));
  }, [contadores]);

   


  return (
    <div className="contenedor">
      <Header />
     <AddContador contadores={contadores} agregarContador={agregarContador} /> 
      <ListContadores
        contadores={contadores}
        agregarContador={agregarContador}
      />
    
    </div>
  );
}

export default App;
