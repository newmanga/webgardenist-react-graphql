import React, {Component} from "react";
import {MenuProductImgs} from "./MenuProducts"
import './Product.css'

class Product extends Component {

    render() {
        return(
            <nav className="products">
                <ul className="product-list">
                    {MenuProductImgs.map((item,index)=> {
                        return (
                            <div className="product-item">
                                <li key={index}>
                                    <img className={item.cName} src={item.src}></img>
                                </li>
                                <p className="product-title">{item.title}</p>
                                <p className="product-price">{item.price}</p>
                            </div>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Product