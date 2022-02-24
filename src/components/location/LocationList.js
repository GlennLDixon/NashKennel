import React, {useEffect, useState} from "react"
import { LocationCard } from './LocationCard.js'
import { deleteLocation, getAllLocations, getlocationById } from "../../modules/LocationManager.js"
import { useNavigate } from "react-router-dom"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    
    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    const handleDeleteLocation = id => {
        deleteLocation(id)
        .then(() => getAllLocations().then(setLocations));
    };

    const navigate = useNavigate()

    useEffect(() => {
        getLocations();
    }, []);

    return(
        <>
            <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => {navigate("/customers/create")}}>
                        Admit customer
                    </button>
                </section>
            <div className="container-cards">
                {locations.map(location => 
                    <LocationCard 
                    key={location.id} 
                    location={location} 
                    handleDeleteLocation={handleDeleteLocation}/>
                    )}
            </div>
        </>
    )

}