import styled from "styled-components";
import bgImg from "../images/pattern-bg.png";
import device from "../device";

const BackgroundWrapper = styled.div`
    position: relative;
    background: url(${bgImg}) no-repeat 100% 100%/100% 100%;
    width: 100%;
    height: 30vh;
    padding: 30px;
    text-align: center;
    color: #fff;

    h1 {
        padding: 20px 0;  
        font-size: 2rem;      
    }

    @media ${device.tablet} {
        padding: 0 30px;
        height: 35vh;
        h1 {
            font-size: 1.5rem;
        }
    }
`;

export default BackgroundWrapper;
