import { useState } from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
// import forms here.
import NormalOrder from '../Forms/NormalOrder';
import CustomOrder from '../Forms/CustomOrder';
import SpecialEdition from '../Forms/SpecialEdition';

// import Hela athkam: form css file here.
import '../Asset/Style/Helaathkam_Form.css';

// import Hela athkam: page css file here.
import '../Asset/Style/Helaathkam_Page.css';

function OrderOnline () {

    // Normal, Special edition and Custom order, state and function details.
    const [isNormalModalOpen, setNormalModalOpen] = useState(false);
    const [isEditionModalOpen, setEditionModalOpen] = useState(false);
    const [isCustomModalOpen, setCustomModalOpen] = useState(false);

    const openNormalModal = () => setNormalModalOpen(true);
    const closeNormalModal = () => setNormalModalOpen(false);

    const openEditionModal = () => setEditionModalOpen(true);
    const closeEditionModal = () => setEditionModalOpen(false);

    const openCustomModal = () => setCustomModalOpen(true);
    const closeCustomModal = () => setCustomModalOpen(false);

    return (
        <>
        
        <h3 className='mb-5'>Place a product order...</h3>
        <p></p>
       <Container id='orderContainer'>
         
        {/* order request accordion */}
        <Accordion>
            {/* normal order request accordion item */}
            <Accordion.Item eventKey='0'>
                <Accordion.Header className='accordionOrder1'>Basic Order</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            <p>You can pre-order products from our existing product categories. Have a look on what we have already. See anything you like?</p>
                            <p>Choose and place your order here.</p>
                        </Row>
                        <Row className='justify-content-center mb-5'>
                            <Col xs={2}>
                                <Button id='normalOrderButton' onClick={openNormalModal}>Place your order</Button>
                                <NormalOrder isNormalModalOpen={isNormalModalOpen} closeNormalModal={closeNormalModal} />
                            </Col>
                        </Row>
                                
                        <Row>
                            <Col xl={4}><p className='text-muted'><i>Delivery Only Within the City.</i></p></Col>
                        </Row>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>

                
            {/* custom order request accordion item */}
            <Accordion.Item eventKey='1'>
                <Accordion.Header>Custom Order</Accordion.Header>
                <Accordion.Body>
                    <Row className='mb-2'>
                        <Col>
                        <Card id='editionCard'>
                        <Row>
                            <Col></Col>
                            <Col xs={10}>
                                {/* Inner content of special editon area */}
                                <Row className='mb-3'><h4>Special Edition</h4></Row>
                            
                               {/* Special edition: Inner content */}
                               <Row className='mb-3'>
                                    <Col>
                                <p>Describe what you have in mind: size adjustments, Color variations, or material choices.
                               We can tailor, existing products to individual preferences.</p>
                                    </Col>
                               </Row>
                            </Col>
                            <Col></Col>
                        </Row>
                        
                        {/* Special edition request button */}
                        <Card.Footer id='editionCardFooter' className='mb-2'>
                             <Row className='ms-4'>
                                    <Button id='editionButton' onClick={openEditionModal}>Special Edition</Button>
                                    <SpecialEdition isEditionModalOpen={isEditionModalOpen} closeEditionModal={closeEditionModal}/>
                               </Row>
                        </Card.Footer>
                    </Card>
                    </Col>

                    <Col>
                    <Card id='customCard'>
                        <Row>
                            <Col></Col>
                            <Col xs={10}>
                                {/*card titles */}
                                <Row className='mb-3'><h4>Customization</h4></Row>
                           
                                {/* customization: inner content  */}
                                <Row className='mb-3'>
                                    <Col> <p>You might want something entirely different than what we already have; 
                                          Tell us what you want. Describe what you have in mind. Tailor-made product, just for you..</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col></Col>
                        </Row>

                        {/* Custom request button */}
                        <Card.Footer id='customCardFooter' className='mb-2'>
                            <Row className='ms-4'> 
                                <Button id='customOrderButton' onClick={openCustomModal}>Custom Request</Button>
                                <CustomOrder isCustomModalOpen={isCustomModalOpen} closeCustomModal={closeCustomModal} />  
                            </Row>
                        </Card.Footer>
                    </Card>
                    </Col>
                    </Row>

                    {/* <Row>
                        <Col xl={4}><p className='text-muted'><i>Delivery Only Within the City.</i></p></Col>
                    </Row> */}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
       </Container>
        </>
    )
}

export default OrderOnline;