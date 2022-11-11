import React from 'react'
import "./App.css"
import {Switch,Route} from "react-router-dom"

import {
  Navbar,
  Footer
} from "./components";

import {
  Home,
  Error,
  Rooms,
  SingleRooms,
} from './pages';

export default function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRooms} />
        <Route path="*" component={Error}/>
      </Switch>
      <Footer/>
    </>
  )
}
