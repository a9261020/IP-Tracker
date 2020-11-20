/* eslint-disable react/prop-types */
import InformationItem from "./Information.style";

const Information = ({ test }) => (
    <>
        {test.map((item) => (
            <InformationItem>
                <h2 className="title">{item.title}</h2>
                <h3 className="content">{item.content}</h3>
            </InformationItem>
        ))}
    </>
);

export default Information;
