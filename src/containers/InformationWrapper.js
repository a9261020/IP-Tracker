import Wrapper from "./InformationWrapper.style";
import Information from "../components/Information";

const InformationWrapper = () => {
    const test = [
        {
            title: "IP ADDRESS",
            content: "192.212.174.101",
        },
        {
            title: "LOCATION",
            content: "Brooklyn, NY 10001",
        },
        {
            title: "TIMEZONE",
            content: "UTC-05:00",
        },
        {
            title: "ISP",
            content: "SpaceX Starlink",
        },
    ];
    return (
        <Wrapper>
            <Information test={test} />
        </Wrapper>
    );
};

export default InformationWrapper;
