/* eslint-disable no-underscore-dangle */
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

import MapWrapper from "../components/Map.style";

const Map = ({ ipInfo }) => {
    useEffect(() => {
        const container = L.DomUtil.get("mapid");
        if (container !== null) {
            container._leaflet_id = null;
        }
        if (Object.keys(ipInfo) !== 0) {
            const mymap = L.map("mapid", { zoomControl: false }).setView(
                [ipInfo.location.lat, ipInfo.location.lng],
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
            const marker = L.marker([ipInfo.location.lat, ipInfo.location.lng], {
                icon: greenIcon,
            }).addTo(mymap);

            marker.openPopup();

            L.circle([ipInfo.location.lat, ipInfo.location.lng], {
                color: "red",
                fillColor: "#f03",
                fillOpacity: 0.5,
                radius: 10,
            }).addTo(mymap);
        }
    }, [ipInfo]);

    return <MapWrapper id="mapid" />;
};

Map.propTypes = {
    ipInfo: PropTypes.shape({
        location: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
    }).isRequired,
};

export default Map;
