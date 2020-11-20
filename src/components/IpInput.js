import { InputWrapper, Input, InputBtn } from "./IpInput.style";
import { ReactComponent as IconArrow } from "../images/icon-arrow.svg";

const IpInput = () => (
    <InputWrapper>
        <Input />
        <InputBtn>
            <IconArrow />
        </InputBtn>
    </InputWrapper>
);

export default IpInput;
