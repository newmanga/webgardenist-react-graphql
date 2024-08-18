import React from 'react';
import styled from "styled-components/macro";
import {HeaderSection} from '../Common/Header';
import {TButton} from '../Common/Header';
import './Thank.css';


const ThankYouSection = styled.section`
    padding-top: 50px;
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
                  <a href='\survey'><TButton>Take Survey</TButton></a>

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
  