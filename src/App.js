import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Ordenes from './components/ordenes/Proyectos';

import OrdenState from './context/ordenes/proyectoState'
import TareaState from './context/tareas/tareaState'
import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/tokenAuth';


import RutaPrivada from './components/rutas/RutaPrivada';

// //* Revisar si tenemos un token
const token = localStorage.getItem('token');
if (token) {
    tokenAuth(token)
}


function App() {
  return (
    <div className="App">
      <OrdenState>
        <TareaState>
          <AlertaState>
            <AuthState>
              <Router>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                  <RutaPrivada exact path="/ordenes" component={Ordenes} />
                </Switch>
              </Router>
            </AuthState>
          </AlertaState>
        </TareaState>
      </OrdenState>
    </div>
  );
}

export default App;
