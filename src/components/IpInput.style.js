import styled from "styled-components";
import device from "../device";

export const borderRadius = "7px";

export const InputWrapper = styled.div`
    display: flex;
    width: 50%;
    margin: auto;

    @media ${device.tablet} {
        width: 100%;
    }
`;

export const Input = styled.input`
    width: 87%;
    padding: 15px;
    border: none;
    border-radius: ${borderRadius} 0 0 ${borderRadius};
    font-size: 1.1rem;

    &:focus{
        outline: none;
    }
`;

export const InputBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13%;
    border: none;
    border-radius: 0 ${borderRadius} ${borderRadius} 0;
    background-color: #000;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: hsl(0, 0%, 17%);
    }
    &:focus{
        outline: none;
    }
`;
