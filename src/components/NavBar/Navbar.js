import React, {Component} from "react";
import {MenuItems} from "./MenuItems"
import mainLogo from './../../kingGardenistLogo.png';
import {Button} from '../Button'
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState ({clicked: !this.state.clicked} )
    }

    render() {
        return(
            <nav className="NavbarItems">
                <img src={mainLogo} className={this.state.clicked? 'navbar-logo active' : 'navbar-logo'} />
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=> {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}


export default Navbar

/*<Button>Sign Up</Button>*/