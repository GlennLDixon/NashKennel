import React, {useEffect, useState} from "react"
import { CustomerCard } from './CustomerCard.js'
import { deleteCustomer, getAllCustomers, getCustomerById } from "../../modules/CustomerManager.js"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    
    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        })
    }

    const handleDeleteCustomer = id => {
        deleteCustomer(id)
        .then(() => getAllCustomers().then(setCustomers));
    };

    useEffect(() => {
        getCustomers();
    }, []);

    return(
        <div className="container-cards">
            {customers.map(customer => 
                <CustomerCard 
                key={customer.id} 
                customer={customer}
                handleDeleteCustomer={handleDeleteCustomer}/>
                )}
        </div>
    )

}