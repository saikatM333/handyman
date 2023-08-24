import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Froms from './component/Froms';
import Nav from './component/Nav';
import { useEffect, useState } from 'react';
import Menu from './component/Menu';


function App() {
     const[menu , setMenu]=useState("hidden")
  return (
    <div className="App">
       
      
       
      <Menu menu={menu} setMenu={setMenu}/>
     
     
   
     
      <Nav  menu={menu} setMenu={setMenu} />
        
       
      </div>

     
   
  );
}

export default App;
