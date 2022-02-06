import React, {useEffect, useState} from "react"
import { EmployeeCard } from './EmployeeCard.js'
import { deleteEmployee, getAllEmployees, getEmployeeById } from "../../modules/EmployeeManager.js"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    
    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        })
    }

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
        .then(() => getAllEmployees().then(setEmployees));
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return(
        <div className="container-cards">
            {employees.map(employee => 
                <EmployeeCard 
                key={employee.id} 
                employee={employee}
                handleDeleteEmployee={handleDeleteEmployee}/>
                )}
        </div>
    )

}