import React, { useEffect, useState } from "react";
import { getActiveCollectionRequest, getCompleteCollectionRequest, getUserData, setReject } from "../services/users";

import { useParams , useHistory} from "react-router-dom";

export default function AdminPage(){
    const history = useHistory()
    const {id} = useParams()
    
    
    const [activeContent, setActiveContent] = useState([]) 
    const [content, setContent] = useState([])
    const [UserDetails, setUserDetails] = useState([])
    

    async function getData(Date, id)
    {
        const userdata = await getUserData(id)
        if(userdata){
                    const temp = {
                        SrNo : id,
                        name : userdata.name,
                        address : userdata.address,
                        date : Date
                    }
                    // console.log(temp)
                    return temp
                }
    }

    
    useEffect(() => {
        async function getRequests(){
            // console.log('before calling a function in getrequests')
            const activeData = await getActiveCollectionRequest()
            const data = await getCompleteCollectionRequest()
            
            setActiveContent(activeData) 
            setContent(data)
            
            
            const TableData = []
            for(let i = 0; i<activeContent.length; i++){
                TableData.push(await getData(activeContent[i].date,activeContent[i]._id))

            }

            setUserDetails([...TableData])

        }getRequests()
    },[UserDetails])



    
    let approved_req = 0
    let rejected_req = 0
    for(let i = 0; i<content.length;i++)
    {
        if(content[i].status === 'Approved')
        {
            approved_req += 1
        }
        if(content[i].status === 'Rejected')
        {
            rejected_req += 1 
        }
    }
   

    async function updateCollectionRequest(requestID){
        const response = await setReject(requestID)
        console.log(response)
        }
    
    function updateUserDetails(requestID){
        const tempArr = []
        for(let i = 0; i < activeContent.length; i++){
            if(activeContent[i]._id === requestID){
                continue
            }
            tempArr.push(activeContent[i])
        }
        setActiveContent([...tempArr])
    }
    
    const styles = {border: '2px solid black', margin : '10px',padding : '5px'}
    return (
        <div>
            <div class = "container-fluid">
                <div class = "row row-relative">
                    <div class = "col-sm-4">
                        <h4>Total Requests</h4>
                        <p>Number of requests : {content.length+activeContent.length}</p>
                    </div>
                    <div class = "col-sm-4 col-border">
                        <div class = "col-border-padding">
                            <h4>Approved</h4>
                            <p>Number of approved requests : {approved_req}</p>
                        </div>
                    </div>
                    <div class = "col-sm-4 col-border">
                        <div class = "col-border-padding">
                            <h4>Rejected</h4>
                            <p>Number of rejected requests : {rejected_req}</p>
                        </div>
                    </div>
                </div>

            </div>

            <hr/>
             
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Address</th>
                        <th scope='col'>Details</th>
                        <th scope='col'>Action</th>
                    </tr>
            </thead>
            <tbody>
                
                {UserDetails.map((item) => (
                        
                        <tr key = {item.SrNo}>

                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.address}</td>
                            <td><button onClick = {(event) =>{
                                event.preventDefault()
                                // console.log(id)
                                history.push(`/requestDetails/${id}/${item.SrNo}`)
                            }}>Details</button></td>
                            <td><button onClick = {()=>{
                                
                                console.log(item.SrNo)
                                updateCollectionRequest(item.SrNo)
                                console.log("length of content",content.length, "length of active content",activeContent.length)
                                updateUserDetails(item.SrNo)
                            }}>Reject</button></td>
                        </tr>
                    ))}
            </tbody>

            </table>
        </div>
    )
}