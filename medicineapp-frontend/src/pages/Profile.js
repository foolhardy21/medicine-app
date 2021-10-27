import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { getUserDetails } from '../services/users'

function Profile(props) {
  const {id} = useParams()

  useEffect(() => {
    async function getProfileData() {
      const user = await getUserDetails(id)
      props.setUser(user)
    }
    getProfileData()
  },[])

  return (
    <div>
      <p>username - {props.user.username}</p>
      <p>name - {props.user.name}</p>
      <p>gender - {props.user.gender}</p>
      <p>age - {props.user.age}</p>
      <p>address - {props.user.address}</p>
    </div>
  );
}

export default Profile;
