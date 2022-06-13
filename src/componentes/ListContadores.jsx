import React from "react";
import listContador from "./listContadores.css";
import Contador from "./Contador";

//funcion para borrar el contador

const ListContadores = ({ contadores, agregarContador }) => {

   //funcion para eliminar
  const deleteContador = (id) => {
      agregarContador(contadores.filter((contador) => {
          if(contador.id !== id){
          return contador;
        }
        return;
    }));
  };

  return (
    <ul className="lista-tareas">

      {contadores.length > 0 ? (
        contadores.map((contador) => {
          return <Contador
          key={contador.id} 
          contador={contador} 
          deleteContador = {deleteContador}
           />
          ;
        })
        
      ) : (
        <div className="lista-tareas__mensaje">
          {" "}
          No hay Contadores agregados
        </div>
      )}
    </ul>
  );
};

export default ListContadores;
