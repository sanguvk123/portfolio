import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import Projects from './components/pages/Projects';
import About from './components/pages/About';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component = { Home } />
        <Route path='/details' exact component = { Details } />
        <Route path='/projects' exact component = { Projects } />
        <Route path='/about' exact component = { About } />
      </Switch>
    </Router>
    </>
  );
}
export default App;
