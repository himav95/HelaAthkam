import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import {useState, useEffect} from 'react';
import ProductDetails from '../Components/ProductDetails';   // import ProductDetails modal from Components.

// import Hela athkam: Page css file here.
import '../Asset/Style/Helaathkam_Page.css';


function Products () {

    const [productData, setProductData] = useState(null);
    useEffect(() => {
        // fetch data from the database.

        fetch('/api/products/1') // erase after: should replace this with my api endpoint.
        .then(response => response.json())
        .then(data => setProductData(data))
        .catch(error => console.error('Error fetching product data: ' + error));
    
    }, []);


    // productDetails modal open and close options.
    const [isProductDetailsOpen, setProductDetailsOpen] = useState(false);

    const openProductDetails = () => setProductDetailsOpen(true);
    const closeProductDetails = () => setProductDetailsOpen(false);

    return (
        <>

        
        <Row className='mb-5'>
            <Col></Col>
            <Col xs={6} md={5} ><h4>Hela Athkam Handicrafts - Just for you</h4></Col>
            <Col></Col>
        </Row>
        {/* Main card content in product page */}
        <Card className='componentSpace' id='productsContain'>
            <Card.Body>

                {/* Product category select */}
                <Row className='justify-content-center mb-5'>
                    <Col xl={6}>
                        <Form.Select>
                            <option>Houseware</option>
                            <option>Kitchenware</option>
                            <option>Tableware</option>
                            <option>Bags</option>
                            <option>Other</option>
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
                                <Card.Link onClick={openProductDetails} >More details</Card.Link>
                            </Card.Text>  
                            
                            {/* renderes productdetails and passing the two props.  */}
                            <ProductDetails isProductDetailsOpen={isProductDetailsOpen} closeProductDetails={closeProductDetails} productData={productData} />
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