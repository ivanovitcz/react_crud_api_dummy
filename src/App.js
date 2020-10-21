import React, { Component } from 'react'
import NavbarComponents from './components/NavbarComponent'
import JumbotronComponent from './components/JumbotronComponent'

import {
  BrowserRouter,
  Route
} from "react-router-dom";
import HomeContainer from './container/HomeContainer';
import CreateUserContainer from './container/CreateUserContainer';
import EditUserContainer from './container/EditUserContainer';
import DetailUserContainer from './container/DetailUserContainer';

export default class App extends Component {
 
  
  render() {
    return (
      <div>
        <NavbarComponents />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer}/>
          <Route path="/create" exact component={CreateUserContainer}/>
          <Route path="/edit/:id" exact component={EditUserContainer}/>
          <Route path="/detail/:id" exact component={DetailUserContainer}/>
        </BrowserRouter>
      </div>
    )
  }
}
