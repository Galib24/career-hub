import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BeakerIcon } from '@heroicons/react/24/solid'
const SingleFeature = ({ feature }) => {
    console.log(feature);
    const { id, image, workPlace, time, jobTitle, location, salary } = feature;
    return (
        <div>
            <Row xs={1} md={2} className="container g-1 mt-3">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" className='image-fluid' src={image} />  */}
                            <img className='w-50 ms-3' src={image} alt="" />
                            <Card.Body>
                                <Card.Title>{jobTitle}</Card.Title>
                                <div className='d-flex gap-3 mb-2 mt-3'>
                                    <div style={{border: '2px solid black'}}>
                                        {workPlace}
                                    </div>
                                    <div style={{border: '2px solid black'}}>
                                        {time}
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <svg width='20' height='20' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <Card.Text>{location}</Card.Text>

                                </div>
                                <div className='d-flex'>
                                    <svg width='20' height='20' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <Card.Text>{salary}
                                    </Card.Text>
                                </div>
                                <Button style={{ backgroundColor: '#7E90FE',marginTop: '20px' }}>View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SingleFeature;