import React, {useEffect, useState} from "react"
import { LocationCard } from './locationCard.js'
import { getAllLocations, getlocationById } from "../../modules/LocationManager.js"
import { deleteEmployee } from "../../modules/EmployeeManager.js"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    
    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
        .then(() => getAllEmployees().then(setEmployees));
    };

    useEffect(() => {
        getLocations();
    }, []);

    return(
        <div className="container-cards">
            {locations.map(location => 
                <LocationCard 
                key={location.id} 
                location={location} 
                handleDeleteEmployee={handleDeleteEmployee}/>
                )}
        </div>
    )

}