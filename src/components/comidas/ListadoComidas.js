import React, { Fragment, useContext } from 'react';
import Tarea from './Comida';
import proyectoContext from "../../context/ordenes/ordenContext";
import tareaContext from '../../context/comidas/comidaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {

    // Extrae ordenes de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // obtener las comidas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    // Si no hay una Orden seleccionada
    if (!proyecto) return <h2 className="header-select">Selecciona una Orden</h2>;

    // Array destructuring para extraer la Orden actual
    const [proyectoActual] = proyecto;

    // Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual._id)
    }

    return (
        <Fragment>
            <h2 className="orden-seleccionada">Orden: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p className="no-tareas">No hay productos</p></li>)
                    :
                    <TransitionGroup>
                        {tareasproyecto.map(tarea => (
                            <CSSTransition
                                key={tarea._id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea
                                    tarea={tarea}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>
            <div className="button-style">
                <button
                    type="button"
                    className="btn btn-eliminar"
                    onClick={onClickEliminar}
                >Eliminar Orden &times;</button>
            </div>
        </Fragment>
    );
}

export default ListadoTareas;