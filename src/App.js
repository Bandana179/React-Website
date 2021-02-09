import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import {Switch, Route} from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';


const App=()=>{
  return(
    <>
      <Navbar/>
      <Switch>
        <Route path='/' exact  component={Home}/>
        <Route path='/about' exact  component={About}/>
        <Route path='/service' exact  component={Services}/>
        <Route path='/contact' exact  component={Contact}/>
        
      </Switch>
      <Footer/>

    </>
  )
}
export default App;