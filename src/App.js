import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Ordenes from './components/ordenes/Ordenes';

import OrdenState from './context/ordenes/ordenState'
import ComidaState from './context/comidas/comidaState'
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
        <ComidaState>
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
        </ComidaState>
      </OrdenState>
    </div>
  );
}

export default App;
