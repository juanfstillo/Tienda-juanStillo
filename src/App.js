import React, { Component }  from 'react';
import NavBar  from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';
//Importar componentes
//import Button from 'react-bootstrap/Button';
// or less ideally
//import { Button } from 'react-bootstrap';


function App() {
  
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting ="Bienvenido a mi tienda" user={'Juan'}/> 
     </div>
  );
}

export default App;
