import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center mb-5' style={{color: '#7E90FE'}}>This is blogs Section</h2>
            {/* card section */}

            <section className='justify-content-center row row-col-sm-1 row-cols-md-auto gap-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>First Question Answer</Card.Title>
                        <Card.Text> <strong>Context API: </strong> Context is basically used when some data needs to be accessible by many components at different nesting levels, <strong>here no need to use props for rendering many time</strong>. </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Second Question Answer</Card.Title>
                        <Card.Text> <strong>Custom Hooks: </strong> Hooks are reusable functions. When you have component logic that needs to be used by multiple components, <strong>we can extract that logic to a custom Hook. Custom Hooks start with "use"</strong>. Example: useFetch. </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Third Question Answer</Card.Title>
                        <Card.Text> <strong>useRef:</strong> useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). </Card.Text>
                    </Card.Body>
                </Card>
            
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Fourth Question Answer</Card.Title>
                        <Card.Text> <strong>useMemo(): </strong> It is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations </Card.Text>
                    </Card.Body>
                </Card>

            </section>
        </div>
    );
};

export default Blog;