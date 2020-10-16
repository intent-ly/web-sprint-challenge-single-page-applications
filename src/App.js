import React, { useState } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import Pizza from './Pizza'
import Help from './Help'



const App = () => {
  
  return (
    <>
    <header>
    <h1>Lambda Eats</h1>
    <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/help'>Help</Link>
        <Link to='/pizza'>Pizza</Link>

        <Route exact path='/' component={Home}/>
        <Route exact path='/pizza' component={Pizza}/>
        <Route exact path='/help' component={Help}/>

      </BrowserRouter>
    </header>

    </>
  );
};
export default App;