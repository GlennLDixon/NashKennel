import React, { useState, useEffect } from 'react';
import { getCustomerById, deleteCustomer } from '../../modules/CustomerManager';
import './CustomerDetail.css';
import { useParams, useNavigate } from "react-router-dom"

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({ name: "", address: "" });
    const [isLoading, setIsLoading] = useState(true)

    const {customerId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //getcustomerById(id) from CustomerManager and hang on to the data; put it into state
        console.log("useEffect", customerId)
        getCustomerById(customerId)
        .then(customer => {
            setCustomer(customer);
            setIsLoading(false)
        });
    }, [customerId]);

    const handleDelete = () => {
        //invoke the delete function in CustomerManger and re-direct to the customer list.
        setIsLoading(true);
        deleteCustomer(customerId).then(() =>
        navigate("/customers")
        );
    };

    return (
        <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__breed">{customer.breed}</div>
        {/* What's up with the question mark???? See below.*/}
        {/* <div className="customer__location">Location: {customer.location?.name}</div>
        <div className="customer__owner">Customer: {customer.customer?.name}</div> */}
        <button type="button" disabled={isLoading} onClick={handleDelete}>
            Discharge
        </button>
        </section>
    );
}