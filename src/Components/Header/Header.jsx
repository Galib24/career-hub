import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Button } from 'react-bootstrap';
const Header = () => {
    return (
        <div>

            <Navbar bg="light" expand="lg" className='mb-4'>
                <Container fluid>
                    <Navbar.Brand href="/" className='fw-bold'>Career View Points </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >



                        </Nav>
                        <Form className="d-flex flex-columns">
                            <nav>
                                <Link to='/'>Home</Link>
                                <Link to='/statistics'>Statistics</Link>
                                <Link to='/appliedJobs'>Applied Jobs</Link>
                                <Link to='/blog'>Blog</Link>
                            </nav>
                            <div>

                        <Button className='bg-success'>Apply here</Button>
                            </div>

                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;