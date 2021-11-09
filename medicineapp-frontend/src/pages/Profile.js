import React, { useEffect, useState } from 'react'
import { getCollectionsRequests } from '../services/collectorService'
import { getUserDetails } from '../services/users'

function Profile(props) {
  const [allRequests, setAllRequests] = useState([])

  useEffect(() => {
    async function getUser() {
      const user = await getUserDetails(JSON.parse(window.localStorage.getItem('userId')))
      props.setUser(user)
    }
    async function getCollections() {
      const response = await getCollectionsRequests(JSON.parse(window.localStorage.getItem('userId')))
      setAllRequests(response)
    }
    getUser()
    getCollections()
    
  },[])
  
  return (
    <div>
      <h2>About Me</h2>
      <p>username - {props.user.username}</p>
      <p>name - {props.user.name}</p>
      <p>gender - {props.user.gender}</p>
      <p>age - {props.user.age}</p>
      <p>address - {props.user.address}</p>
      <h2>Collections</h2>
      {
        allRequests.map(request => {
          console.log(request)
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
      <h2>Donations</h2>
    </div>
  );
}

export default Profile;
