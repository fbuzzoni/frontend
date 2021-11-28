import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import Header from './components/layaout/Header';
import Nav from './components/layaout/Nav';
import Footer from './components/layaout/Footer';
import HomePage from './pages/HomePage';
import EducacionPage from './pages/EducacionPage';
import ExperienciaPage from './pages/ExperienciaPage';
import BlogPage from './pages/BlogPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <Router>
      <Nav/>
      <Header/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/EducacionPage" exact component={EducacionPage}/>
        <Route path="/ExperienciaPage" exact component={ExperienciaPage}/>
        <Route path="/BlogPage" exact component={BlogPage}/>
        <Route path="/ContactoPage" exact component={ContactoPage}/>
      </Switch> 
    <Footer/>    
    </Router>
  );
}

export default App;
