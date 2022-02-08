import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employee, handleDeletEmployee}) => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    {/* <img src={'/images/dog.svg'} alt="My Dog" /> */}
                </picture>
                <h3>Name: <span className="card-employeename">
                {employee.name}
                </span></h3>
                <p>Location: {employee.location?.name}</p>
                <button type="button" onClick={() => handleDeletEmployee(employee.id)}>Discharge</button>
            </div>
        </div>
    )
}