import React, {useEffect, useState} from "react"
import { LocationCard } from './locationCard.js'
import { getAllLocations, getlocationById } from "../../modules/LocationManager.js"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    
    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    useEffect(() => {
        getLocations();
    }, []);

    return(
        <div className="container-cards">
            {locations.map(location => 
                <LocationCard key={location.id} location={location} />
                )}
        </div>
    )

}