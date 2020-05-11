import React, { useContext } from 'react';
import proyectoContext from "../../context/ordenes/ordenContext";
import tareaContext from "../../context/comidas/comidaContext";



const Proyecto = ({ proyecto }) => {

    // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext;


    //funcion para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); //Fijar un proyecto actual
        obtenerTareas(id); //Filtrar las tareas cuando sse de click
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto._id)}
            >{proyecto.nombre}</button>
        </li>
    );
};

export default Proyecto;