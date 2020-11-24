import styled from "styled-components";
import device from "../device";

const Map = styled.div`
    width: 100vw;
    height: 70vh;
    background-color: #999;

    @media ${device.tablet} {
        height: 60vh;
    }
`;

export default Map;
