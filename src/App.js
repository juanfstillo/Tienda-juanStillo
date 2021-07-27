import React  from 'react';
import { useState, useEffect } from 'react';
import NavBar  from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  
    return (

    <div className="App">
     <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>

     </div>
  );
}

export default App;

