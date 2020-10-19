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
import BackComponent from './components/BackComponent';

export default class App extends Component {
  state = {
    title : "Mynne",
    users : [
      {
        id: 1,
        nama: "ancsc",
        alamat: "asdassad",
        umur: 24,
        nohp: "090898080"
      },
      {
        id: 2,
        nama: "kjkljlj",
        alamat: "vbvnvnvb",
        umur: 11,
        nohp: "087867856"
      },
      {
        id: 3,
        nama: "bdsgdhfbc",
        alamat: "adacsfetw",
        umur: 45,
        nohp: "0877777"
      },
      {
        id: 4,
        nama: "ancsfdfdggfdgc",
        alamat: "dfgdgdfv",
        umur: 12,
        nohp: "08989898"
      },
      {
        id: 5,
        nama: "bnbnbnnb",
        alamat: "sddsdssff",
        umur: 221,
        nohp: "08778687567"
      },
      {
        id: 6,
        nama: "sfsfvvbbn",
        alamat: "qwsaxsfcgf",
        umur: 55,
        nohp: "90076866"
      },
      {
        id: 7,
        nama: "vvvscxcxc",
        alamat: "addadadaddad",
        umur: 66,
        nohp: "087686575"
      },
      {
        id: 8,
        nama: "adadcvvb",
        alamat: "ipukhgnfgh",
        umur: 32,
        nohp: "078967856"
      },
      {
        id: 9,
        nama: "scxvbfh",
        alamat: "kghjmgh",
        umur: 43,
        nohp: "0898997"
      },
      {
        id: 10,
        nama: "ccxczcz",
        alamat: "asdaaadadassad",
        umur: 88,
        nohp: "0879678575"
      },
      {
        id: 11,
        nama: "sdddscv",
        alamat: "ljljkhkh",
        umur: 22,
        nohp: "07867856"
      },
      {
        id: 12,
        nama: "aaddadadu",
        alamat: "fbgfjreaf",
        umur: 61,
        nohp: "08796786"
      }
    ]
   }
  
  render() {
    return (
      <div>
        <NavbarComponents />
        <JumbotronComponent title={this.state.title}/>
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer users={this.state.users}/>
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer/>
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserContainer/>
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer/>
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}
