import React, { useEffect, useState } from 'react'
import { getCollectionsRequests } from '../services/collectorService'
import { getUserDetails } from '../services/users'

function Profile(props) {
  const [collections, setCollections] = useState({})

  useEffect(() => {
    async function getUser() {
      const user = await getUserDetails(JSON.parse(window.localStorage.getItem('userId')))
      props.setUser(user)
    }
    async function getCollections() {
      const response = await getCollectionsRequests(JSON.parse(window.localStorage.getItem('userId')))
      const collectionsReq = {
        active: response.active,
        date: response.date,
        requests: response.request,
        status: response.status,
      } 
      setCollections(collectionsReq)
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
      <p>{collections.date}</p>
      <p>{collections.status}</p>
      {
        collections.requests && 
        collections.requests.map(req => {
          return (
            <div key={req._id}>
              <p>{req.medicineName}</p>
              <p>{req.weight}</p>
              <p>{req.companyName}</p>
              <p>{req.quantity}</p>
            </div>
          ) 
        })
      }
      <h2>Donations</h2>
    </div>
  );
}

export default Profile;
