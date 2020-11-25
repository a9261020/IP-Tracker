import PropTypes from "prop-types";

import BackgroundWrapper from "../components/Background.style";
import IpInput from "../components/IpInput";
import Information from "./InformationWrapper";

const Background = ({ ipInfo, ipSubmit }) => (
    <BackgroundWrapper>
        <h1>IP Address Tracker</h1>
        <IpInput ipSubmit={ipSubmit} />
        <Information ipInfo={ipInfo} />
    </BackgroundWrapper>
);

Background.propTypes = {
    ipSubmit: PropTypes.func.isRequired,
    ipInfo: PropTypes.shape({}).isRequired,
};

export default Background;
