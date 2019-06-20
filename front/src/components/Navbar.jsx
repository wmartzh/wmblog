/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import $ from 'jquery';
import logo from '../img/wlogo.svg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <img src={logo} alt="" id ="wrap-logo"className="brand-logo"/>
                <ul id="normal-nav">
                    <li><Link to="/about"className="title">ABOUT</Link></li>
                    <li><Link to="/blog" className="title">BLOG</Link></li>
                    <li><Link to="/projects"className="title">PROJECTS</Link></li>
               </ul>
                <p className=".test"></p>
            
          
            
            </div>
        );
    }
}


export default Navbar