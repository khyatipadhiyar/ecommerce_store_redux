import React, { Component } from 'react'
import './App.css';

import Header from './components/Header/Header.component'
import Homepage from './Pages/Homepage'
import {Route,Switch} from 'react-router-dom'
import ProductDetails from './components/ProductDetails/ProductDetails.component'
import Cart from './components/Cart/Cart.component'
import HireMe from './components/HireMe/Hireme.component'

class App extends Component  {

  render() {
    return (
      <div className="App">
        <Route path='/' render={(props)=> <Header {...props}/>} />
        <Switch>
          <Route exact path='/' render={(props)=> <Homepage {...props}/>}/>
          <Route exact path='/details/:detail' render={(props)=><ProductDetails {...props}/>}/> 
        </Switch>
        <Route path='/'render={(props)=> <Cart {...props}/>} />
        <Route exact path='/HireMe' component={ HireMe} />
      </div>
    );
  }
}

export default App;
