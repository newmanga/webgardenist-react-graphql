import React from 'react';
import styled, {css} from "styled-components/macro";
import {HeaderSection} from '../Common/Header';
import ProductSimple from '../Products/ProductSimple';

const GenericSection = styled.section`
    padding-top: 0px;
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

const SurveyPage = () => {
    return (
      <HeaderSection>
        <GenericSection>
                <div className="thank-message">
                  <h3>Which of below products you would like to see listed in our shop?</h3>
                </div>
                <ProductSimple/>
        </GenericSection>
      </HeaderSection>
    );
  };
  
  export default SurveyPage;
  