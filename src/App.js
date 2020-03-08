import React from 'react';
import { Switch, Route } from "react-router-dom";
import HeaderLogin from './components/headerLogin/headerLogin.component';
import LoginPanel from './pages/loginPanel.page';
import Home from './pages/Home.page';



function App() {
  return (
    <div className="App">
        <HeaderLogin />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPanel} />
      </Switch>
    </div>
  );
}

export default App;
