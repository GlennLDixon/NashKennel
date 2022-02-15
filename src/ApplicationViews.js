import React from "react"
import { Home } from "./Home"
import { CustomerList } from "./components/customer/CustomerList"
import { EmployeeList } from "./components/employee/EmployeeList"
import { LocationList } from "./components/location/LocationList"
import { AnimalList } from "./components/animal/AnimalList"
import { AnimalDetail } from "./components/animal/AnimalDetail"
import { LocationDetail } from "./components/location/LocationDetail"
import { EmployeeDetail } from "./components/employee/EmployeeDetail"
import { CustomerDetail } from "./components/customer/CustomerDetail"
import { AnimalForm } from './components/animal/AnimalForm'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'


export const ApplicationViews = ( {isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
    
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={
                    <PrivateRoute>
                        <AnimalList />
                    </PrivateRoute>
                }/>
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />
                
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/:customerId" element={<CustomerDetail />} />
                
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/employees/:EmployeeId" element={<EmployeeDetail />} />
                
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
            </Routes>
        </>
    )
}