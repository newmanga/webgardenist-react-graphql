import styled, { createGlobalStyle} from 'styled-components';



const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export const Container = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  align-items:center;
  justify-content: left;
  display: flex;
  background-color: #4c956c;
  border-radius: 50px;
  border: 2px solid #4c956c;
  color: #f6e7cb;
  margin: 1em 0em;
  padding: 0.1em 1em;
  font-size: 2rem;
  width: 100%;
  &:hover {
    background-color: #6a997f;
  }
`;

export const Section = styled.section`
  display: block;
`;