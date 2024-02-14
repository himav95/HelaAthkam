import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Products () {
    return (
        <>
        
        <Row className='mb-4'>
            <Col></Col>
            <Col xs={6} md={5} ><h4>Hela Athkam Handicrafts - Just for you</h4></Col>
            <Col></Col>
        </Row>
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
                    <Card width={200} height={300} style={{maxWidth: 250}} >
                        <Card.Img variant="top" width={200} height={200} src="https://picsum.photos/200/200" />
                        <Card.Body>
                            <Card.Title>Product 1</Card.Title>
                            <Card.Text>
                                <p>describe the product 1</p>
                            </Card.Text>

                            <ButtonGroup style={{display: 'flex', justifyContent: 'center'}}>
                                    <Button variant="success">Buy Now</Button>
                                    <Button variant="warning">Add to Cart</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>
            </Card.Body>
        </Card>
        
        </>
    )
}

export default Products