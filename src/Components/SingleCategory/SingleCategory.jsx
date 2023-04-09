import React from 'react';

const SingleCategory = ({JobCategory}) => {
    const {jobTitle,Available,image} = JobCategory
    return (
        <div>
           <h4>{jobTitle}</h4>
        </div>
    );
};

export default SingleCategory;