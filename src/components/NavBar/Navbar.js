import React, {Component} from "react";
import {MenuItems} from "./MenuItems"
import mainLogo from './../../kingGardenistLogo.png';
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState ({clicked: !this.state.clicked} )
    }

    render() {
        return(
            <nav className="MainNavBar">
                <a className="div-logo" href="/">
                    <img src={mainLogo} className={this.state.clicked? 'navbar-logo active' : 'navbar-logo'} />
                </a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=> {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.path}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar