import { useState } from "react";
import PropTypes from "prop-types";
import { InputWrapper, Input, InputBtn } from "./IpInput.style";
import { ReactComponent as IconArrow } from "../images/icon-arrow.svg";

const IpInput = ({ ipSubmit }) => {
    const [ip, setIp] = useState("");

    const ipHandler = (e) => setIp(e.target.value);

    const searchHandler = () => ipSubmit(ip);

    return (
        <InputWrapper>
            <Input aria-label="type search ip" onChange={ipHandler} />
            <InputBtn aria-label="search btn" onClick={searchHandler}>
                <IconArrow />
            </InputBtn>
        </InputWrapper>
    );
};

IpInput.propTypes = {
    ipSubmit: PropTypes.func.isRequired,
};

export default IpInput;
