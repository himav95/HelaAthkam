import { Modal, Card, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
// link my NormalOrder.css file
import '../Asset/Style/NormalOrder.css';
import { useState } from 'react';

function NormalOrder ({ isNormalModalOpen, closeNormalModal }) {

  const [showToast, setShowToast] =  useState(true);
  const toggleShowToast = () => setShowToast(!showToast);

  return (
    <>
    
    <Modal show={isNormalModalOpen} onHide={closeNormalModal} backdrop="static" size='lg' centered>
      <Modal.Header id='normalOrderHeader' closeButton>
        <Modal.Title><h3>Order Request</h3></Modal.Title>
      </Modal.Header>

      {/* Normal order form content */}
      <Modal.Body>
        <Row className='mb-3'><Col><h5>Customer Details</h5></Col></Row>

        {/* normal order form: customer details  */}
        <Row className='mb-3'>
          <Col></Col>
          {/* customer name */}
          <Col xs={4}>
            <Form.Group ControlId="Name">
              <Form.Label>Name <Form.Label className="required">*</Form.Label></Form.Label>
              <Form.Control size='sm' type="text" autoFocus></Form.Control>
            </Form.Group>
          </Col>

          {/* customer email address */}
          <Col xs={4}>
            <Form.Group controlId='email'>
              <Form.Label>Email <Form.Label className="required">*</Form.Label></Form.Label>
              <Form.Control size='sm' type='email' placeholder='helaathkam@example.com'></Form.Control>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>

        {/* customer phone number */}
        <Row className='mb-3'>
          <Col></Col>
          <Col xs={4}>
            <Form.Group ControlId='phoneNumber'>
              <Form.Label>Phone Number <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Control size='sm' type='text'></Form.Control>
            </Form.Group>
          </Col>
          <Col xs={4}></Col>
          <Col></Col>
        </Row>

        <hr />

        {/* normal order form: order request details */}
        <Row className='justify-content-center mb-3'><Col><h5>Order Details</h5></Col></Row>
        <Row className='mb-3'>
          <Col></Col>

          {/* product category */}
          <Col xs={4}>
            <Form.Group ControlId="ProdocutCategory">
              <Form.Label>Product Category <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Select size='sm' aria-label='categoryOptions'>
                <option selected disabled>Select Category</option>
                <option>Houseware</option>
                <option>Tableware</option>
                <option>Kitchenware</option>
                <option>Bags</option>
              </Form.Select>
            </Form.Group>
          </Col>

          {/* product */}
          <Col xs={4}>
            <Form.Group ControlId='Product'>
              <Form.Label>Product <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Select size='sm' aria-label='product'>
                <option selected disabled>Select Product</option>
                <option></option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>

        {/* normal order form product quantity and delivery date and delivery option */}
        <Row className='mb-5'>
          <Col></Col>

          {/* quantity */}
          <Col xs={4}>
            <Form.Group ControlId="Quantity" className='mb-3'>
              <Form.Label>Quantity <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Control size='sm' type='text'></Form.Control>
            </Form.Group>

          {/* delivery date */}
          <Form.Group ControlId='deliveryDate'>
              <Form.Label>delivery Date <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Control size='sm' type='date'></Form.Control>
            </Form.Group>
          </Col>

          {/* delivery option and notice toast. */}
          <Col xs={4}>

            {/* Delivery Notice */}
            <Toast onClose={toggleShowToast} show={showToast} animation={false} id='noticeToast'>
              {/* delay={3600} autohide : using seems not okay?! */}
                <Toast.Header>
                  <img
                    src=""
                    className="rounded me-2"
                    alt=""
                  />
                 <strong className="me-auto">Notice</strong>
                 {/* <small>1 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>Hela Athkam delivery service is Only active within the City.</Toast.Body>
              </Toast>

           <Card id="deliverCard" className='justify-content-center'>
            <Row></Row>
            <Row className='mb-5'>
            <Col></Col>

            <Col xs={6}>
              {/* pickup */}
              <Form.Group ControlId='deliverRadio1'  className='mb-3'>
                <Form.Check type='radio' name='deliver' inline></Form.Check>
                <Form.Label>Pick Up</Form.Label>
              </Form.Group>

              {/* delivery */}
              <Form.Group controlId='deliverRadio2'>
                <Form.Check type='radio' name='deliver'  onClick={toggleShowToast} inline></Form.Check>
                <Form.Label>Delivery</Form.Label>
              </Form.Group>
            </Col>
            <Col></Col>
            </Row>
            <Row></Row>
           </Card>
          </Col>
          <Col></Col>
        </Row>

        {/* normal order form close and submit buttons. */}
        <Row>
          <Col>
          <Button id='clearButton' variant='secondary' className='mx-5' onClick={closeNormalModal}>Close</Button>
          <Button id='submitButton'>Submit</Button>
          </Col>
        </Row>
      </Modal.Body>
      
      
    </Modal>
    
    </>
  );
};

export default NormalOrder;