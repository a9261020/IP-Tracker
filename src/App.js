import { useEffect, useState } from "react";
import axios from "axios";

import "./reset.css";
import Background from "./containers/Background";
import Map from "./containers/Map";

const App = () => {
    const [ipInfo, setIpInfo] = useState({
        location: {
            lat: 0,
            lng: 0,
        },
    });
    const [ip, setIp] = useState("192.212.174.101");

    useEffect(() => {
        const url = "https://geo.ipify.org/api/v1";
        const apiKey = "at_V71o7YxFE7WaczmjW61gfHgqdmoH6";
        axios
            .get(`${url}?apiKey=${apiKey}&ipAddress=${ip}`)
            .then((res) => setIpInfo(res.data));
    }, [ip]);

    const ipSubmit = (searchIp) => setIp(searchIp);

    return (
        <div className="App">
            <Background ipInfo={ipInfo} ipSubmit={ipSubmit} />
            <Map ipInfo={ipInfo} />
        </div>
    );
};

export default App;
