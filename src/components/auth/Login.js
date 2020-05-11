import React, { useState, useContext, useEffect } from "react";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";
import { Link } from "react-router-dom";

const Login = (props) => {
    //* Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //* Extraer los valores y funciones de AuthContext
    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;
    //* En caso de que el password o usuario no exista
    useEffect(() => {
        if (autenticado) {
            props.history.push("/proyectos");
        }

        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: "",
        password: "",
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    //cuando el usuario quiera iniciar sesion
    const onSubmit = (e) => {
        e.preventDefault();

        //validar que no haya campos vacios
        if (email.trim() === "" || password.trim() === "") {
            mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
        }
        //pasarlo al action
        iniciarSesion({ email, password });
    };

    return (
        <div className="form-usuario">
            {alerta ? (
                <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
            ) : null}{" "}
            <img
                src={require("../../img/ITSONnegativo.png")}
                alt="Logo itson"
                className="img-login img-size"
            />
            <div className="contenedor-form sombra-dark">
                <h1 className="h1-login">Iniciar Sesion</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Ingresar"
                        />
                    </div>
                </form>

                <Link to={"/nueva-cuenta"} className="enlace-cuenta">
                    Obtener Cuenta
        </Link>
            </div>
        </div>
    );
};

export default Login;
