import PropTypes from "prop-types";

import Wrapper from "./InformationWrapper.style";
import Information from "../components/Information";

const InformationWrapper = ({ ipInfo }) => (
    <Wrapper>
        <Information ipInfo={ipInfo} />
    </Wrapper>
);

InformationWrapper.propTypes = {
    ipInfo: PropTypes.shape({}).isRequired,
};

export default InformationWrapper;
