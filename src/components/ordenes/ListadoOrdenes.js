import React, { useContext, useEffect } from 'react';
import Proyecto from "./Orden";
import proyectoContext from "../../context/ordenes/ordenContext";
import AlertaContext from '../../context/alertas/alertaContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// import firebase from "firebase";
// import { firebaseConfig } from "../../firebase/firebase";
import "firebase/database";

const ListadoProyectos = () => {

    //*Extraer orden de state initial
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

    //**Obtener alertas
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //! firebase
    // const app = firebase.initializeApp(firebaseConfig);
    // const db = app.database().ref().child('Ordenes');

    //* Obtener proyectos cuando carga el componente
    useEffect(() => {

        //* Si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
        obtenerProyectos();

        // const { ordenes } = orden;
        // db.on('child_added', snap => {
        //     ordenes.push({
        //         ordenId: snap.key,
        //         comprador: snap.val().comprador
        //     });

        //     orden({ ordenes });
        // });

        // db.on('child_removed', snap => {
        //     for (let i = 0; i < ordenes.length; i++) {
        //         if (ordenes[i].ordenId === snap.key) {
        //             ordenes.splice(i, 1);
        //         }
        //     }
        //     console.log(ordenes);
        //     orden({ ordenes });
        // });
        // eslint-disable-next-line
    }, [mensaje]);

    //*Revisar si Orden tiene contenido
    if (proyectos.length === 0) return <p>No cuentas con Ordenes pendientes</p>;


    return (
        <ul className="listado-proyectos">

            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}

            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
                        timeout={400}
                        classNames="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>



        </ul>
    );
};

export default ListadoProyectos;