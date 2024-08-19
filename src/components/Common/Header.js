import styled from "styled-components/macro";
// import headerImage from "../../Images/HeaderImageBig.jpg";
import headerImage from "../../Images/kg_pattern.jpg";

const HeaderSection = styled.section`
    position: relative;
    background-image: url(${headerImage});
    background-size: 600px;
    background-size: contain;
    background-repeat: repeat;
    background-position: top;
    padding-top: var(--navbar-height);
    min-height: 1000px;
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
    font-family: zenon, sans-serif;
    color: black;
    &:hover {
        background-color: #d68c45;
    }
`;

export {HeaderSection, TButton};