import React  from 'react';
import { useState, useEffect } from 'react';
import NavBar  from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Footer from './components/Footer';


function App() {
    
    return (
      
          <Router>
                  <NavBar/>
                  
                <div className="App">

              <Switch>
                 
                  <Route exact path="/detail" component={ItemDetailContainer}/>
                  {/* <ItemCount/> */}
                  <Route exact path="/">
                    <ItemListContainer/>
                  </Route>
                  <Route exact path="/category/:categoryId">
                    <ItemListContainer/>
                  </Route>
                  <Route exact path="/item/:itemId">
                    <ItemDetailContainer/>
                  </Route>

              </Switch>
              </div>

              <Footer/>
          </Router>
  );
}

export default App;

