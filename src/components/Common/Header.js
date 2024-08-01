import styled from "styled-components/macro";
import headerImage from "../../Images/HeaderImageBig.jpg";

const HeaderSection = styled.section`
    position: relative;
    background-image: url(${headerImage});
    background-size: contain;
    background-repeat: repeat;
    background-position: top;
    margin-top: 130px;
    min-height: 1000px;
`;

export {HeaderSection};