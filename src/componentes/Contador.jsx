import React, { useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";




export const Contador = ({ contador, deleteContador}) => {


 const change = (e) => {
    e.preventDefault();
    setCuenta (
      [
      ...cuenta,{
      }
    ])
    setCuenta('');
  }
 
const save = 
  localStorage.getItem('valor') ?
  JSON.parse (localStorage.getItem('valor')) : [];
  

  const [cuenta, setCuenta]   = useState(save);

  useEffect(() => {
    localStorage.setItem("valor", JSON.stringify(cuenta));
  }, [cuenta]);

  // por ahora la funcion retorna el ultimo valor ingresado

  
  return (
    <li className="lista-tareas__tarea">

      <div className="lista-tareas__texto">{contador.texto}</div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faTrash}
          className="lista-contador__icono lista-tareas__icono-accion"
          onClick={() => deleteContador(contador.id)}
        />
      </div>
      <div>
         
      
        <button  disabled = {cuenta >= 20} onClick={() => {setCuenta(cuenta + 1)}} >+</button>
        < input  
           value={cuenta}
            onChange = {change} 
         />
    
        <button  disabled = {cuenta <= 0} onClick={() => {setCuenta(cuenta - 1)}}>-</button>
      </div>
    </li>
  );

  
};

export default Contador;




