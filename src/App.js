import logo from './logo.svg';
import React, { Component }  from 'react';
import NavBar  from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const HolaApp=()=>{
  let nombre= 'pepe';

  return(<p>Hola</p>)
}
function App() {
  let nombre= 'pepe';
  const style={backgroundColor:'blue'}
  const saludar=()=>{
    alert('hola');
  }
  return (
    <div className="App">
     <NavBar/> 
     </div>
  );
}

export default App;
