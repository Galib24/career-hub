import React from 'react';
import Card from 'react-bootstrap/Card';
const SingleCategory = ({ JobCategory }) => {
    const { jobTitle, Available, image } = JobCategory
    return (
        <div>
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Body>
                {/* <Card.Img variant="top" className='image-fluid w-50' src={image} /> */}
                <img className='shadow-sm  position-absolute top-0 start-0 ms-5 mt-2' width={40} height={40} src={image} alt="" />
                    <Card.Title>{jobTitle}</Card.Title>
                    <Card.Text>{Available}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCategory;