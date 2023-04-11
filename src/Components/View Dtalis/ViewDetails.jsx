import React, { useEffect, useState } from 'react';
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
            <div>
                {/* {jobDetails.Phone} */}

                
            </div>
        
        </div>
    );
};

export default ViewDetails;