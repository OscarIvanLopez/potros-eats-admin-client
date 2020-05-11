import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from "../../context/ordenes/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";



const FormTarea = () => {

    //* Obtener si el proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //* obtener la función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, validarTarea, agregarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    //* Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if (tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada);
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);

    //* State del formulario 
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //* Extraer el nombre del proyecto
    const { nombre } = tarea;

    //*Si no hay proyecto seleccionado
    if (!proyecto) return null;

    //*Array destructuring para extraer el proyecto actual
    //* eslint-disable-next-line
    const [proyectoActual] = proyecto;

    //*Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //* Validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        //* Revisar si es edicion o es nueva tarea
        if (tareaseleccionada === null) {

            //* Agregar nueva tarea al state de tareas
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
            
        }else{
            //* actualizar tarea exitente
            actualizarTarea(tarea);

            //* Elimina tarea seleccionada del state 
            limpiarTarea();
        }


        //* Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);


        //* Reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : "Agregar Tarea"}
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}

export default FormTarea;