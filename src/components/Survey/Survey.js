import React from 'react';
import styled, {css} from "styled-components/macro";
import {HeaderSection} from '../Common/Header';
import ProductSimple from '../Products/ProductSimple';

const GenericSection = styled.section`
    padding-top: 30px;
    margin: 0px 10px;
`;

const P = styled.p`
    font-size: 1.4rem;
`;

const SurveyPage = () => {
    return (
      <HeaderSection>
        <GenericSection>
                <P>Select the product you like the most:</P>
                <ProductSimple/>
        </GenericSection>
      </HeaderSection>
    );
  };
  
  export default SurveyPage;
  