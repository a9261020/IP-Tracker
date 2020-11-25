import styled from "styled-components";
import { borderRadius } from "./IpInput.style";
import device from "../device";

const Wrapper = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 999;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 70%;
    margin: auto;
    padding: 50px 20px;
    border-radius: ${borderRadius};
    background-color: #fff;
    color: hsl(0, 0%, 17%);

    @media ${device.tablet} {
        flex-flow: column;
        align-items: center;
        width: calc(100% - 60px);
        padding: 20px;
    }
`;

export default Wrapper;
