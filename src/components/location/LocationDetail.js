import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager.js';
import './LocationDetail.css';
import { useParams, useNavigate } from "react-router-dom"

export const LocationDetail = () => {
    const [location, setLocation] = useState({ name: "", address: "" })
    const [isLoading, setIsLoading] = useState(true)

    const {locationId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //getlocationById(id) from locationManager and hang on to the data; put it into state
        console.log("useEffect", locationId)
        getLocationById(locationId)
        .then(location => {
            setLocation(location);
            setIsLoading(false)
        });
    }, [locationId]);

    const handleDelete = () => {
        //invoke the delete function in LocationManger and re-direct to the location list.
        setIsLoading(true);
        deleteLocation(locationId).then(() =>
        navigate("/locations")
        );
    };

    return (
        <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__breed">{location.address}</div>
        {/* What's up with the question mark???? See below.*/}
        {/* <div className="location__location">Location: {location.location?.name}</div>
        <div className="location__owner">Customer: {location.customer?.name}</div> */}
        <button type="button" disabled={isLoading} onClick={handleDelete}>
            Discharge
        </button>
        </section>
    );
}