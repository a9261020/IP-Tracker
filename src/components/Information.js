import PropTypes from "prop-types";
import InformationItem from "./Information.style";

const Information = ({ ipInfo }) => (
    <>
        <InformationItem>
            <h2 className="title">IP ADDRESS</h2>
            <h3 className="content">{ipInfo.ip}</h3>
        </InformationItem>
        <InformationItem>
            <h2 className="title">LOCATION</h2>
            <h3 className="content">
                {`${ipInfo?.location?.region ?? ""}, ${ipInfo?.location?.country ?? ""}${ipInfo?.location?.postalCode ?? ""}`}
            </h3>
        </InformationItem>
        <InformationItem>
            <h2 className="title">TIMEZONE</h2>
            <h3 className="content">{ipInfo.location.timezone}</h3>
        </InformationItem>
        <InformationItem>
            <h2 className="title">ISP</h2>
            {ipInfo.location && ipInfo.location.region && (
                <h3 className="content">{ipInfo.isp}</h3>
            )}
        </InformationItem>
    </>
);

Information.propTypes = {
    ipInfo: PropTypes.shape({
        location: PropTypes.shape({
            region: PropTypes.string,
            country: PropTypes.string,
            postalCode: PropTypes.string,
            timezone: PropTypes.string,
        }),
        isp: PropTypes.string,
        ip: PropTypes.string,
    }).isRequired,
};

export default Information;
