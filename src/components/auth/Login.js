import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    //cuando el usuario quiera iniciar sesion
    const onSubmit = e => {
    }
    return (
        <div className="form-usuario">
                <img src={require('../../img/ITSONnegativo.png')} alt="Logo itson" className="img-login img-size" />
            <div className="contenedor-form sombra-dark">
                <h1 className="h1-login">Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <input type="submit" className="btn btn-primario btn-block" value="Ingresar" />
                    </div>
                </form>

                <Link to={'/new-account'} className="enlace-cuenta" >
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
};

export default Login;
