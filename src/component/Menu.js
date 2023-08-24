import React from 'react'
import {

    BrowserRouter as Router,
  
    Routes,
  
    RouteMatch,
  
    Route,
  
    Link,
  
  } from "react-router-dom";

  import Home from './Home';
import About from './About';
import Contact from './Contact';
import Froms from './Froms';

export default function Menu(props) {
    console.log(props.menu)
  return (
    <Router>
    <div> <div className={"menu-container" }>
    <ul className={"menu-list "+ props.menu}>
        <li className={"menu-list-item "}>
           
            <Link to="/">Home</Link>
            </li>
        <li className='menu-list-item'>
        <Link to="/about">About Us</Link>
            </li>
 
        <li className='menu-list-item'>
        <Link to="/contact">Contact Us</Link>
            </li>
 
        <li className='menu-list-item'>
        <Link to="/from">From</Link>
        
            </li>
 
    </ul>
    
    <Routes>

          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/about" element={<About />}></Route>

          <Route exact path="/contact" element={<Contact />}></Route>

          <Route exact path="/from" element={<Froms />}></Route>

        </Routes>

    </div> </div> </Router>
  )
}
