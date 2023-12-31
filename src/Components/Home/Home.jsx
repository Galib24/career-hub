import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from '../SingleCategory/SingleCategory';
import SingleFeature from '../SingleFeature/SingleFeature';
import { Button } from 'react-bootstrap';

const Home = () => {
    const JobCatagories = useLoaderData();
    // console.log(JobCatagories);
    

    const [features, setFeatures] = useState([])
    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])




    return (
        <>
            <div className='container'>

                {/* first section */}
                <section className='d-flex row'>
                    <div className='col-md-5 ms-5 mt-5 fs-5 '>
                        <h1 className='fw-bold'>One Step <br /> Closer To Your <br />  <span style={{ color: '#7E90FE' }}>Dream Job</span></h1>
                        <p style={{ color: '#757575' }}>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button style={{ backgroundColor: '#7E90FE' }}>Get Started</button>
                    </div>
                    <div className='row col-md-6'>
                        <img className='img-fluid' src="https://i.ibb.co/ssfj3Fz/P3-OLGJ1-copy-1.png" alt="" />
                    </div>
                </section>


                {/* second section */}

                <section className='text-center mt-5'>
                    <h2>Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='row row-cols-auto g-4 mt-3 '>
                        {
                            JobCatagories.map(JobCategory => <SingleCategory
                                key={JobCategory.id}
                                JobCategory={JobCategory}
                            >

                            </SingleCategory>)
                        }
                    </div>
                </section>
                <section className='text-center mt-5'>
                    <h2>Featured Jobs</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </section>
                {/* third section */}
                <section>
                    <div className=' row row-cols-md-2 mt-3 ms-5 g-3'>
                        {
                            features.map(feature => <SingleFeature
                                key={feature.id}
                                feature={feature}
                            >

                            </SingleFeature>)
                        }
                        
                    </div>
                    <div style={{marginRight:'200px'}} className='text-center'>
                    <Button style={{backgroundColor: '#7E90FE'}}>See All Jobs</Button>
                    </div>
                </section>



            </div>
        </>
    );
};

export default Home;