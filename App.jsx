import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'
import Thatsme from './components/Thatsme'

import "./Styles/App.css"
function App() {
const [navToggle,setNavToggle]= useState(false);


const navClick = () =>{
setNavToggle(!navToggle)
}
    return (
        <>
        <div className="App">
            <div className={`navbar ${navToggle ? 'nav-Toggle': ''}`}>
<Navbar/>
            </div>
            <div className="nav-btn" onClick={navClick}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
            <div className="main-content">
            <div className="content">
            <Switch>
<Route path="/" exact>
<Home></Home>
</Route>
            </Switch>
            
            </div>

            </div>

            <div className="about">
                <div className="about-pages">
                <Switch>
<Route path="/" exact>
<About></About>
</Route>
            </Switch>
                </div>
            </div>
            <div className="projects">
            <div className="projects-name">

          
            <Switch>
<Route path="/" exact>
<Projects></Projects>
</Route>
            </Switch>

            </div>
            </div>
<div className="that-me">
<div className="thatme-start">


            <Switch>
<Route path="/" exact>
<Thatsme/>
</Route>
            </Switch>
</div>
</div>
<div className="services">
    <div className="serves">
    <Switch>
<Route path="/" exact>
<Service/>
</Route>
            </Switch>
    </div>
</div>
<div className="contact">
    <div className="contact-detail">
      <Contact/>  
    </div>
</div>
        </div>
        </>
    )
}

export default App;
