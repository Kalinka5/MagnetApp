import React, { useRef, useEffect, useState } from "react";

import maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-2.1952951);
  const [lat] = useState(53.4287932);
  const [zoom] = useState(15);
  const [API_KEY] = useState("BkITIvBamUw37fC9V8cW");

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    // Add a marker to the map
    new maplibregl.Marker().setLngLat([lng, lat]).addTo(map.current);
  }, [API_KEY, lng, lat, zoom]);

  return (
    <div className="mx-auto w-full h-[200px] overflow-hidden">
      <div
        ref={mapContainer}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      ></div>
    </div>
  );
};

export default MapComponent;
