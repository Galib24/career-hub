import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from '../SingleCategory/SingleCategory';

const Home = () => {
    const JobCatagories = useLoaderData();
    // console.log(JobCatagories);
    return (
        <div>
            <div className='container'>

                {/* first section */}
                <section className='d-flex row'>
                    <div className='col-md-5 ms-5 mt-5 fs-5 '>
                        <h1  className='fw-bold'>One Step <br /> Closer To Your <br />  <span style={{color: '#7E90FE'}}>Dream Job</span></h1>
                        <p style={{color: '#757575'}}>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button style={{backgroundColor: '#7E90FE'}}>Get Started</button>
                    </div>
                    <div className='row col-md-6'>
                        <img className='img-fluid' src="../../../public/All Images/P3OLGJ1 copy 1.png" alt="" />
                    </div>
                </section>
            

            {/* second section */}

            <section className='text-center mt-5'>
            <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='row row-cols-auto sm:g-2 mt-5 '>
                    {
                        JobCatagories.map(JobCategory => <SingleCategory
                        key={JobCategory.id}
                        JobCategory={JobCategory}
                        >

                        </SingleCategory> )
                    }
                </div>
            </section>
            </div>
        </div>
    );
};

export default Home;