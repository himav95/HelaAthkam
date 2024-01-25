import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Products () {
    return (
        <>
        
        {/* Main card content in product page */}
        <Card>
            <Card.Body>

                {/* Product category select */}
                <Row className='justify-content-center mb-5'>
                    <Col xl={6}>
                        <Form.Select>
                            <option>Houseware</option>
                            <option>Kitchenware</option>
                            <option>Tableware</option>
                            <option>Bags</option>
                        </Form.Select>
                    </Col>
                </Row>

                {/* Product card set row 1 */}
                <Row className='mb-5'>

                    {/* Product card 1 */}
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Product 1</Card.Title>
                            <Card.Text>
                                <p>describe the product 1</p>
                            </Card.Text>

                            <ButtonGroup>
                                    <Button variant="success">Buy Now</Button>
                                    <Button variant="warning">Add to Cart</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                    </Col>

                    
                    {/* product card 2 */}
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Product 2</Card.Title>
                            <Card.Text>
                                <p>describe the product 2</p>
                            </Card.Text>

                            <ButtonGroup>
                                <Button variant="success">Buy Now</Button>
                                <Button variant="warning">Add to Cart</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                    </Col>

                    {/* product card 3 */}
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Product 3</Card.Title>
                            <Card.Text>
                                <p>describe the product 3</p>
                            </Card.Text>

                            <ButtonGroup>
                                <Button variant="success">Buy Now</Button>
                                <Button variant="warning">Add to Cart</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>


                 {/* Product card set row 2 */}
                <Row className='mb-5'>

                    {/* product card 4 */}
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Product 4</Card.Title>
                            <Card.Text>
                                <p>describe the product 4</p>
                            </Card.Text>

                            <ButtonGroup>
                                <Button variant="success">Buy Now</Button>
                                <Button variant="warning">Add to Cart</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                    </Col>

                    {/* product card 5 */}
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Product 5</Card.Title>
                            <Card.Text>
                                <p>describe the product 5</p>
                            </Card.Text>

                            <ButtonGroup>
                                <Button variant="success">Buy Now</Button>
                                <Button variant="warning">Add to Cart</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                    </Col>

                    {/* product card 6 */}
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Product 6</Card.Title>
                            <Card.Text>
                                <p>describe the product 6</p>
                            </Card.Text>

                            <ButtonGroup>
                                <Button variant="success">Buy Now</Button>
                                <Button variant="warning">Add to Cart</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>

                {/* product pagination */}
                <Row>
                    
                </Row>

                   
            </Card.Body>
        </Card>
        
        </>
    )
}

export default Products