import React from "react"

const Collections = ({allCollections}) => {
    
    return (
        <>
            <h4>Collections</h4>
            {
                allCollections.map(request => {
                return (
                    <ul key={request._id}>
                    <li>{request.status}</li>
                    <li>{request.date}</li>
                    {
                        request.request.map(medicine => {
                        return (
                            <ul key={medicine._id}>
                            <li>{medicine.medicineName}</li>
                            <li>{medicine.weight}</li>
                            <li>{medicine.companyName}</li>
                            <li>{medicine.quantity}</li>
                            </ul>
                        )
                        })
                    }
                    </ul>
                )
                })
            }
        </>
    )
}

export default Collections