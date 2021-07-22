import React, { Component }  from 'react';
import { useState, useEffect } from 'react';
import NavBar  from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';


function App() {
  // const [contador, setContador] = useState(0)
  // const [fecha, setFecha] = useState(null)
  // function handleCount(){
  //   setContador(contador + 1)
  //   let date= Date()
  //   setFecha(date)

  // }
    return (

    <div className="App">
     <NavBar/>
    <ItemListContainer/>

     </div>
  );
}

export default App;

