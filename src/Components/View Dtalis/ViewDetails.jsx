import React, { useEffect, useState } from 'react';
import {  Button, Card } from 'react-bootstrap';
import {  useLoaderData, useParams } from 'react-router-dom';


const ViewDetails = () => {
    const {detailsId} = useParams();
    // console.log(dynamic.detailsId);
    // const [details,setDetails] =  useState([]);
    // useEffect(()=>{
    //     fetch("/jobDetails.json")
    //     .then(res => res.json())
    //     .then(data => setDetails(data))
        
    // })
    const details = useLoaderData();
    // console.log(details);
    const [jobDetails, setJobDetails]  = useState({})
    useEffect(()=>{
        if(details){
            const detailsData = details.find(dt => dt.id == detailsId);
            setJobDetails(detailsData);
        }
    },[])
    return (
        <div>
            <div className='text-center mt-5'>
            <h2>Job Details</h2>
            </div>
            <div className='d-flex gap-5 mt-5'>
                {/* {jobDetails.Phone} */}
<div>
<Card>
            
            <Card.Body>
              <p><small><strong>Job Description: </strong> {jobDetails.JobDescription}</small></p>
              <br />
              <p><small><strong>Job Responsibility: </strong> {jobDetails.JobResponsibility}</small></p>
              <p><small><strong>Educational Requirements : <br /> </strong> {jobDetails.EducationalRequirements}</small></p>
              <p><small><strong>Experiences: <br /> </strong> {jobDetails.Experiences}</small></p>

            </Card.Body>
          </Card>
</div>
<div>
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Job Details</Card.Title>
        {/* <Card.Text></Card.Text>  */}
        <p><small><strong>Salary: </strong> {jobDetails.salary}</small></p>
        <p><small><strong>Job Title: </strong> {jobDetails.jobTitle}</small></p>
        <Card.Title>Contact Information</Card.Title>
        <p><small><strong>Email: </strong> {jobDetails.email}</small></p>
        <p><small><strong>Address: </strong> {jobDetails.location}</small></p>
        <br />

<Button  style={{backgroundColor: '#7E90FE'}} className='mx-4'>Apply Now</Button>

      </Card.Body>
    </Card>
</div>
                
            </div>
        
        </div>
    );
};

export default ViewDetails;