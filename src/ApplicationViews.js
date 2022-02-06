import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { CustomerList } from "./components/customer/CustomerList"
import { EmployeeList } from "./components/employee/EmployeeList"
import { LocationList } from "./components/location/LocationList"
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
                <Route path="/customers" element={<CustomerList />} />
                
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/employees" element={<EmployeeList />} />
                
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/locations" element={<LocationList />} />
            </Routes>
        </>
    )
}