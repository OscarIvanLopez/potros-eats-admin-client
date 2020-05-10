import React from 'react';
import Login from './components/auth/Login'
import NewAccount from './components/auth/NewAccount'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/new-account" component={NewAccount} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
