import PropTypes from "prop-types";
import InformationItem from "./Information.style";

const Information = ({ test }) => (
    <>
        {test.map((item) => (
            <InformationItem key={item.title}>
                <h2 className="title">{item.title}</h2>
                <h3 className="content">{item.content}</h3>
            </InformationItem>
        ))}
    </>
);

Information.propTypes = {
    test: PropTypes.instanceOf(Array).isRequired,
};

export default Information;
