import BackgroundWrapper from "./Background.style";
import IpInput from "./IpInput";
import Information from "../containers/InformationWrapper";

const Background = () => (
    <BackgroundWrapper>
        <h1>IP Address Tracker</h1>
        <IpInput />
        <Information />
    </BackgroundWrapper>
);

export default Background;
