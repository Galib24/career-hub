import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const ViewDetails = () => {
    const jobDetails = useParams();
    // console.log(jobDetails);
    const [details,setDetails] =  useState([]);
    useEffect(()=>{
        fetch("/jobDetails.json")
        .then(res => res.json())
        .then(data => console.log(data))
        
    })
    return (
        <div>
            <div className='text-center mt-5'>
            <h2>Job Details</h2>
            </div>
        </div>
    );
};

export default ViewDetails;