import React, {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/ordenes/ordenContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;


    // State para Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    // Extraer nombre de proyecto
    const {nombre} = proyecto;

    // Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    };

    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto
        if (nombre === '') {
            mostrarError();
            return;
        }

        // agregar al state
        agregarProyecto(proyecto);

        // Reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    };

    // Mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nueva Orden
            </button>

            {formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Orden"
                            name="nombre"
                            value={nombre}  
                            onChange={onChangeProyecto}
                        />

                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Orden"
                        />

                    </form>
                ) : null}

            {errorformulario ? <p className="mensaje error">El nombre de la Orden es obligatorio</p> : null}
        </Fragment>
    );
};

export default NuevoProyecto;