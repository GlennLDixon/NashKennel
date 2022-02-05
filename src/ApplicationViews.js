import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { CustomerCard } from "./components/customer/CustomerCard"
import { EmployeeCard } from "./components/employee/EmployeeCard"
import { LocationCard } from "./components/location/LocationCard"
import { AnimalList } from "./components/animal/AnimalList"


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />
                
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/customers" element={<CustomerCard />} />
                
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/employees" element={<EmployeeCard />} />
                
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/locations" element={<LocationCard />} />
            </Routes>
        </>
    )
}