import React, { useEffect, useState} from "react";
import { useParams, useHistory  } from "react-router-dom";
import { getCollectionRequest, getUserData, setReject, setApprove } from "../services/users";

// export default function DetailsPage(props){
export default function DetailsPage(){
    const history = useHistory()
    const {adminid,requestid} = useParams()
    const [collectionRequest, setCollectionRequest] = useState([])
    const [userDetails, setUserDetails] = useState('')
    
    useEffect(() => {
        async function getUserCollection(){
            const user = await getUserData(requestid)
            setUserDetails(user)
            
        }getUserCollection()
        async function getRequest(){
            const response = await getCollectionRequest(requestid)
            setCollectionRequest([...response.request])
            
        }getRequest()
        
    }, [])
    
    async function Approve(){
        const response = await setApprove(requestid)
        
    }
    async function Reject(){
        const response = await setReject(requestid)
    }
    
    return(
        <>
        <hr/>
             <div>
                 <p>name - {userDetails.name}</p>
                 <p>gender - {userDetails.gender}</p>
                 <p>age - {userDetails.age}</p>
                 <p>address - {userDetails.address}</p>
                 <p>contact - {userDetails.contact}</p>
             </div>
             <hr/>
             <h4>Medicine Requests</h4>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Quantity</th>
                        <th scope='col'>Company Name</th>
                        
                    </tr>
            </thead>
            <tbody>
                {collectionRequest.map((item) => (
                        <tr key = {item.medicineName}>
                            <td>{item.medicineName}</td>
                            <td>{item.weight}</td>
                            <td>{item.quantity}</td>
                            <td>{item.companyName}</td>   
                        </tr>
                    ))}
                    
                 </tbody>

            </table>
           
            <div class="row"> 
                <div class="col-sm-12 text-center">
                    <button class="btn btn-primary btn-md center-block"  onClick={() => {
                        Approve()
                        history.push(`/admin-page/${adminid}`)
                    }} >Approve</button>
                    <button class="btn btn-danger btn-md center-block" onClick={() => {
                         Reject()
                         history.push(`/admin-page/${adminid}`)
                    }} >Reject</button>
                </div>
            </div>

        </>
    )
}