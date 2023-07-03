import { useContext, useState } from 'react'
import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Register from './components/Register'
import Signup from './components/Signup'
import About from './components/about'
import Logout from './components/Logout'

export const UserContext = React.createContext();


const App=()=> {
  const userContext = useContext(UserContext);
   
  

  return (
    <UserContext.Provider value={userContext}>
    <>
     <Navbar/>
     {/* <Route path="/Contact">
      <Contact/>
     </Route>

     <Route path='/'>
      <Home/>
     </Route>

     <Route path='/Register'>
      <Register/>
     </Route>

     <Route path='/Signup'>
      <Signup/>
     </Route> */}
     <Routes>
     <Route exact path='/about' Component={About}/>
     <Route exact path='/contact' Component={Contact}/>

     <Route exact path='/' Component={Home}/>

     <Route exact path='/Register' Component={Register}/>
     <Route exact path='/Signin' Component={Signup}/>
     <Route exact path='/logout' Component={Logout}/>


     </Routes>

    </>
    </UserContext.Provider>
  )
 

}
export default App
