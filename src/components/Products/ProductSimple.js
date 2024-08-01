import React, {Component} from "react";
import {MenuProductImgs} from "./MenuProducts"
import styled from "styled-components/macro";
import './Product.css'
import {TButton} from '../Common/Header';

const ProductButton = styled.button`
    width: 100%;
    border-style: solid;
    border-width: 0px;
    // border-radius: 50px;
    // box-shadow: 5px 5px 10px -3px #000;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    // padding: 0.5rem;
`;

const PopupWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

  visibility: ${(props) => (props.isPopupOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isPopupOpen ? 1 : 0)};
`;

const PopupContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

    /* Optional styling for popup content (consider customizing further): */
    max-width: 800px; /* Limit maximum width for responsiveness */
    max-height: 80%; /* Limit maximum height for overflow prevention */
    overflow-y: auto; /* Enable scrolling if content overflows */
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer; /* Add cursor for visual feedback */

    /* Optional styling for close button (consider customizing further): */
    background-color: #ddd;
    color: #333;
`;

class ProductSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopupOpen: false,
            selectedImage: null, // Store the currently selected image
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
    }

    handleClick(item) {
        this.setState({ isPopupOpen: true, selectedImage: item });
    }

    handleClosePopup() {
        this.setState({ isPopupOpen: false });
    }

    render() {
        const { isPopupOpen, selectedImage } = this.state;
    
        return (
          <nav className="products">
            <ul className="product-list">
              {MenuProductImgs.map((item, index) => {
                return (
                  <div className="product-item" key={index}>
                    <ProductButton onClick={() => this.handleClick(item)}>
                      <li>
                        <img className={item.cName} src={item.src} alt={item.title} />
                      </li>
                    </ProductButton>
                    <p className="product-title">{item.title}</p>
                  </div>
                );
              })}
            </ul>
    
            {isPopupOpen && (
              <PopupWrapper style={{ visibility: "visible", opacity: 1 }}>
                <PopupContent>
                  <img src={selectedImage.src} alt={selectedImage.title} style={{ width: "100%" }} />
                  <div className="popup-buttons">
                    {/* <CloseButton onClick={this.handleClosePopup}>Close</CloseButton> */}
                    <div style={{ display: "flex" }}>
                        <TButton onClick={this.handleClosePopup} style={{ margin: "0px 10px" }}>Close</TButton>
                        <TButton onClick={this.handleClosePopup}>Select</TButton>
                    </div>
                  </div>
                </PopupContent>
              </PopupWrapper>
            )}
          </nav>
        );
      }
}

export default ProductSimple