import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const CardApply = ({dt}) => {
    const { id,image, workPlace, jobTitle, company, salary, location } = dt
    const navigate = useNavigate()
    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{jobTitle}</Card.Title>
        <Card.Text>{workPlace} </Card.Text>
        <Card.Text>{location} </Card.Text>
        <Card.Text>{salary} </Card.Text>
        <Button onClick={()=>navigate(`/viewDetails/${id}`)} style={{backgroundColor: '#7E90FE'}} variant="primary">View Details</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardApply;