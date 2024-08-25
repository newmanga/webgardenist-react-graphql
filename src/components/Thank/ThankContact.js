import React from 'react';
import styled from "styled-components/macro";
import {HeaderSection} from '../Common/Header';
import {TButton} from '../Common/Header';
import './Thank.css';

const ThankYouSection = styled.section`
    padding-top: 50px;
`;

const ThankYouContactPage = () => { 
    return (
      <HeaderSection>
        <ThankYouSection>
                <div className="thank-message">
                  <h2>Thank You for Contacting Kind Gardenist!</h2>
                </div>
                <div className='thank-body'>
                  <p>We'll get back to you as soon as possible.<p/>

                  {/* <p>Want to help us improve? Take our quick survey and enjoy a whopping <b>50% off</b> your next purchase!</p>
                  <a href='\survey'><TButton>Take Survey</TButton></a>

                  <p>Check out these recommended products.</p>
                  <TButton>See Products</TButton>
                  <p>Thank you for being a valued customer!</p> */}
                  </p>
                  <a href='\'><TButton>Back to Home</TButton></a>
                </div>
        </ThankYouSection>
      </HeaderSection>
    );
  };
  
  export default ThankYouContactPage;