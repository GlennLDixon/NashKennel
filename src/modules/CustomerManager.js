const remoteURL = 'http://localhost:8088'

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`).then(res => res.json())
} 