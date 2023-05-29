import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useState } from "react";
import { useRef } from "react";
const libraries = ["places"];

const TestGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAOd56WYDxHrJAhOvngce5eaEIcryQ-ZBE",
    libraries: libraries,
  });

  const [map, setMap] = useState(null);
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();
  const destinationRef = useRef();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const calculateRoute = async () => {
    if (!originRef.current.value || !destinationRef.current.value) {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };

  const clearRoute = () => {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  };

  const center = { lat: 48.8584, lng: 2.2945 };
  return (
    <div className="goolemap-container">
      <Autocomplete>
        <input type="text" placeholder="origin" ref={originRef} />
      </Autocomplete>
      <br />
      <Autocomplete>
        <input type="text" placeholder="destination" ref={destinationRef} />
      </Autocomplete>
      <br />
      <button type="button" onClick={() => map.panTo(center)}>
        Focus
      </button>
      <button type="button" onClick={calculateRoute}>
        calculate
      </button>
      <button type="button" onClick={clearRoute}>
        clear
      </button>
      <div>Distance: {distance}</div>
      <div>Duration: {duration}</div>
      <div
        className="google-map"
        style={{
          position: "absolute",
          left: "25%",
          top: "50%",
          height: "50%",
          width: "50%",
        }}
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={15}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionResponse && (
            <DirectionsRenderer directions={directionResponse} />
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default TestGoogleMap;
