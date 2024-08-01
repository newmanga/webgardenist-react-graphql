import React from 'react';
import styled, {css} from "styled-components/macro";
import {HeaderSection} from '../Common/Header';
import './Thank.css';


const ThankYouSection = styled.section`
    padding-top: 50px;
`;

const TButton = styled.button`
    width: 300px;
    margin-bottom: 5px;
    font-size: 1.5rem;
    border-style: solid;
    border-width: 0px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px -3px #000;
    display: inline;
    align-items: center;
    justify-content: left;
    background-color: #4c956c;
    position: relative;
    z-index: 1;
    padding: 0.5rem;
    &:hover {
        background-color: #d68c45;
    }
`;

const ThankYouPage = () => {
    return (
      <HeaderSection>
        <ThankYouSection>
                <div className="thank-message">
                  <h2>Thank You Again for Your Purchase!</h2>
                </div>
                <div className='thank-body'>
                  <p>We're so happy you chose to support KindGardenist.<p/>

                  <p>Want to help us improve? Take our quick survey and enjoy a whopping <b>50% off</b> your next purchase!</p>
                  <TButton>Take Survey</TButton>

                  <p>Check out these recommended products.</p>
                  <TButton>See Products</TButton>
                  <p>Thank you for being a valued customer!</p>
                  </p>
                </div>
        </ThankYouSection>
      </HeaderSection>
    );
  };
  
  export default ThankYouPage;
  