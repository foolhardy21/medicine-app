import React, { useEffect, useState } from 'react'
import { getCollectionsRequests } from '../services/collectorService'
import {getDonationsRequests} from '../services/donorService'
import { getUserDetails } from '../services/users'
import Collections from '../components/Collections'
import Donations from '../components/Donations'

function Profile(props) {
  const [allCollections, setAllCollections] = useState([])
  const [allDonations, setAllDonations] = useState([])
  
  useEffect(() => {
    async function getUser() {
      const user = await getUserDetails(JSON.parse(window.localStorage.getItem('userId')))
      props.setUser(user)
    }
    async function getCollections() {
      const response = await getCollectionsRequests(JSON.parse(window.localStorage.getItem('userId')))
      setAllCollections(response)
    }
    async function getDonations() {
      const response = await getDonationsRequests(JSON.parse(window.localStorage.getItem('userId')))
      setAllDonations(response)
    }
    getUser()
    getCollections()
    getDonations()
    
  },[])
  
  return (
    <div>
      <h2>About Me</h2>
      <p>username - {props.user.username}</p>
      <p>name - {props.user.name}</p>
      <p>gender - {props.user.gender}</p>
      <p>age - {props.user.age}</p>
      <p>address - {props.user.address}</p>
      <Collections allCollections={allCollections} />
      <Donations allDonations={allDonations}/>
    </div>
  );
}

export default Profile;
