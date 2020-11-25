import PropTypes from "prop-types";

import BackgroundWrapper from "../components/Background.style";
import IpInput from "../components/IpInput";
import Information from "./InformationWrapper";

const Background = ({ ipInfo }) => (
    <BackgroundWrapper>
        <h1>IP Address Tracker</h1>
        <IpInput />
        <Information ipInfo={ipInfo} />
    </BackgroundWrapper>
);

Background.propTypes = {
    ipInfo: PropTypes.shape({}).isRequired,
};

export default Background;
