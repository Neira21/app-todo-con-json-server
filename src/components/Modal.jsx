/* eslint-disable */
import { useState, useEffect } from "react";

function Modal({ editingTaskIndex, onClose, editTask }) {
  const [task, setTask] = useState(editingTaskIndex.text);


  const onSubmit = (task, id) => {
    editTask(task, id);
    onClose();
  }


  return (
    <div className="contenedor">
      <form className="modal-principal" onSubmit={
        (e) => {
          e.preventDefault();
          onSubmit(task, editingTaskIndex.id);
        }
      
      } >
        <div className="modal-titulo">
          <h1>{editingTaskIndex ? "Editar tarea" : "Agregar tarea"}</h1>
        </div>
        <div className="modal-contenido">
          <input
            className="modal-tarea-input"
            type="text"
            placeholder="Escribe una tarea..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        
        </div>
        <div className="modal-footer">
          <button
            type="submit"
            className="modal-editar"
          >
            Editar
          </button>
          <button 
            className="modal-cerrar"
            onClick={onClose} 
          >
            Cerrar
          </button>  
        </div>
      </form>

      
      

    </div>
  );
}

export default Modal;



/*
isOpen && (
      <div className="modal">
        <h2>{taskToEdit ? "Editar tarea" : "Agregar tarea"}</h2>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={task}
          onChange={handleTaskChange}
        />
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSubmit}>
            {taskToEdit ? "Guardar" : "Agregar"}
          </button>
        </div>
      </div>
    )
*/