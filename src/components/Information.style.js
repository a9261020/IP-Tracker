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
        font-weight: 300;
        color: #999;    

    }

    h3 {
        font-size: 1.2rem;
        font-weight: 700;
    }
`;

export default InformationItem;
