/* eslint-disable no-underscore-dangle */
import PropTypes from "prop-types";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

import MapComponent from "../components/Map";

const Map = ({ ipInfo }) => {
    useEffect(() => {
        const mymap = L.map("mapid", { zoomControl: false });
        mymap.setView(
            [25.03418, 121.564517],
            17,
        );

        const OSMUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

        L.tileLayer(OSMUrl).addTo(mymap);
        // 使用 leaflet-color-markers ( https://github.com/pointhi/leaflet-color-markers ) 當作 marker
        const greenIcon = new L.Icon({
            iconUrl:
                "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
            shadowUrl:
                "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        });
        const marker = L.marker([25.03418, 121.564517], {
            icon: greenIcon,
        }).addTo(mymap);
        marker.openPopup();
        L.circle([25.03418, 121.564517], {
            color: "red",
            fillColor: "#f03",
            fillOpacity: 0.5,
            radius: 10,
        }).addTo(mymap);
    }, []);

    useEffect(() => {
        const container = L.DomUtil.get("mapid");
        if (container !== null) {
            container._leaflet_id = null;
        }
        const mymap = L.map("mapid", { zoomControl: false });
        mymap.setView(
            [25.03418, 121.564517],
            17,
        );

        const OSMUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

        L.tileLayer(OSMUrl).addTo(mymap);
        // 使用 leaflet-color-markers ( https://github.com/pointhi/leaflet-color-markers ) 當作 marker
        const greenIcon = new L.Icon({
            iconUrl:
                "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
            shadowUrl:
                "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        });
        const marker = L.marker([25.03418, 121.564517], {
            icon: greenIcon,
        }).addTo(mymap);
        marker.openPopup();
        L.circle([25.03418, 121.564517], {
            color: "red",
            fillColor: "#f03",
            fillOpacity: 0.5,
            radius: 10,
        }).addTo(mymap);
    }, [ipInfo]);

    return (
        <MapComponent ipInfo={ipInfo} />
    );
};

Map.propTypes = {
    ipInfo: PropTypes.shape({}).isRequired,
};

export default Map;
