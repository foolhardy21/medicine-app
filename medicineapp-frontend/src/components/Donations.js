import React from "react"

const Donations = ({allDonations}) => {
    return (
        <>
            <h4>Donations</h4>
            {
                allDonations.map(donation => {
                return (
                    <ul key={donation._id}>
                    <li>{donation.submissionDate}</li>
                    {
                        donation.submission.map(medicine => {
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

export default Donations