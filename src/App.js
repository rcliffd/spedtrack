import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewUser from "./pages/NewUser";
import RegED from "./pages/RegED";
import SPED from "./pages/SPED";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import './App.css';
import './style.css';


function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
       
        <Switch>
          {/* <Route exact path="/" component={Jumbotron} heading="SPEDtrack" /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/RegED" component={RegED} />
          <Route exact path="/SPED" component={SPED} />
          <Route exact path="/NewUser" component={NewUser} />
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
