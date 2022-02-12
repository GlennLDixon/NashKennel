import React, { useState, useEffect } from 'react';
import { getEmployeeById, deleteEmployee } from '../../modules/EmployeeManager';
import './EmployeeDetail.css';
import { useParams, useNavigate } from "react-router-dom"

export const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({ name: "", breed: "" });
    const [isLoading, setIsLoading] = useState(true)

    const {employeeId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //getemployeeById(id) from employeeManager and hang on to the data; put it into state
        console.log("useEffect", employeeId)
        getEmployeeById(employeeId)
        .then(employee => {
            setEmployee(employee);
            setIsLoading(false)
        });
    }, [employeeId]);

    const handleDelete = () => {
        //invoke the delete function in EmployeeManger and re-direct to the employee list.
        setIsLoading(true);
        deleteEmployee(employeeId).then(() =>
        navigate("/employees")
        );
    };

    return (
        <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        {/* What's up with the question mark???? See below.*/}
        <div className="employee__location">Name: {employee.location?.name}</div>
        <div className="employee__owner">Address: {employee.customer?.name}</div>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
            Discharge
        </button>
        </section>
    );
}