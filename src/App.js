import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Qualification from './Components/Qualification';
import Home from './Components/Home';
import Skill from './Components/Skill';
import Particle from './Components/Particle';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Cv from './Components/Cv';
import Contact from './Components/Contact';
import { Route, Switch } from 'react-router-dom';
const App=()=>{
  return(
<>
<Particle num={40}/>
<Navbar/>
<Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/education' component={Qualification}/>
  <Route exact path='/skill' component={Skill}/>
  <Route exact path='/project' component={Projects}/>
  <Route exact path='/cv' component={Cv}/>
  <Route exact path='/contact' component={Contact}/>
</Switch>
</>
  );
}

export default App;
