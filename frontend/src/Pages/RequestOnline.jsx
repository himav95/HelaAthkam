import { Button, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function RequestOnline () {
    return (
        <>
        
        <h3>Request Online</h3>
        <p>Place a product order...</p>
        

        <Accordion>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>Normal-Order Request</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            <p>You can pre-order products from our existing product categories. Have a look on what we have already. See anything you like?</p>
                            <p>Choose and place your order here.</p>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col xs={2}>
                                <Button>Order Request Form</Button>
                                
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={4}><p className='text-muted'><i>Delivery Only Within the City.</i></p></Col>
                        </Row>
                    </Container>
                </Accordion.Body>
                
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
                <Accordion.Header>Custom-Order Request</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            <p>Describe what you have in mind: size adjustments, Color variations, or material choices.
                               We can tailor, existing products to individual preferences or if you want something entirely different than what we already have; 
                               Tell us what you want...
                            </p>
                            <p>For an example; Design gift boxes tailored to specific occasions or recipient types.</p>
                            <p>Describe and place your order here.</p>
                        </Row>

                        <Row className='justify-content-center'>
                            <Col xl={2}>
                                <Button>Order Request Form</Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={4}><p className='text-muted'><i>Delivery Only Within the City.</i></p></Col>
                        </Row>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
        </>
    )
}

export default RequestOnline