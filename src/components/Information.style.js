import styled from "styled-components";
import device from "../device";

const InformationItem = styled.div`
    padding: 0 30px;
    text-align: left;
    @media ${device.tablet} {
        padding: 0;
        text-align: center;
    }

    + div {
        border-left: 2px solid;
        @media ${device.tablet} {
            padding-top: 20px;
            border: none
        }
    }

    h2 {
        margin-bottom: 10px;
        font-size: .8rem;    
        font-weight: 400;
        letter-spacing: 2px;
        color: hsl(0, 0%, 59%);    
        @media ${device.tablet} {
            font-size: .2rem;
        }
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 500;
        @media ${device.tablet} {
            font-size: 1rem;
        }
    }
`;

export default InformationItem;
