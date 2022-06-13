import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import addContador from './addContador.css'
import {v4 as uuidv4} from 'uuid'



const AddContador = ({contadores, agregarContador}) => {
 
  const [inputContadores, agregarContadorInput] = useState ('');


  const handleSubmit = (e) => {
    e.preventDefault();

    agregarContador(
      
      [
        ...contadores, 
         {
           id: uuidv4(),
           texto: inputContadores,
           
         }
      ]
    );
  
    agregarContadorInput('');
  }

  return (
    <form action="" className='formulario-tareas' onSubmit={handleSubmit}>
      <input 
      type="text" 
      className='formulario-tareas__input'
      placeholder='Ingresa contador' 
      //el valor lo tenemos que sacar de un estado, en este caso 
      value = {inputContadores}
      //la funcion la agregamos aqui, esta funcion se ejecutara cada vez que hay un cambio en el input
      onChange= {(e) => agregarContadorInput(e.target.value)}
      />
     
     <button
     type='submit'
     className= 'formulario-tareas__btn'>
     <FontAwesomeIcon 
     icon={faCircleCheck} 
     className= 'formulario-tareas__icono-btn'
      />
     </button>

    </form>
  )
}

export default AddContador

