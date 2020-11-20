import styled from "styled-components";
import device from "../device";

const Map = styled.div`
    width: 100%;
    height: 70vh;
    background-color: #999;

    @media ${device.tablet} {
        height: 65vh;
    }
`;

export default Map;
