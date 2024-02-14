import { Modal, Button, FloatingLabel } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

// import Hela athkam: form css file here.
import '../Asset/Style/Helaathkam_Form.css';


function CraftsmanRequest ({ isRequestModalOpen, closeRequestModal }) {
  return (
    <>
    
    <Modal show={isRequestModalOpen} onHide={closeRequestModal} backdrop="static" size='xl'>
      <Modal.Header id='craftsmanHeader' closeButton>
        <Modal.Title>Craft-Maker Request</Modal.Title>
      </Modal.Header>

      {/* Craftsman request form content */}
      <Modal.Body>
        <Row className='mb-3'><h5>Craft-Designer Details</h5></Row>

        {/* Craftsman request form: Craft designer details. */}
        <Row className='mb-3'>
          <Col></Col>
          {/* Craftsman name */}
          <Col xs={3}>
            <Form.Group ControlId="name">
              <Form.Label className='customLabel'>Name <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Control size='sm' type='text' autoFocus></Form.Control>
            </Form.Group>
          </Col>

          {/* Craftsman NIC */}
          <Col xs={3}>
            <Form.Group ControlId="nic">
              <Form.Label className='customLabel'>NIC <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Control size='sm' type='text'></Form.Control>
            </Form.Group>
          </Col>

          {/* Craftsman email */}
          <Col xs={3}>
            <Form.Group controlId='email'>
              <Form.Label className='customLabel'>Email <Form.Label></Form.Label></Form.Label>
              <Form.Control size='sm' type='email' placeholder='helaathkam@example.com'></Form.Control>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>

        <Row className='mb-3'>
          <Col></Col>
          {/* Craftsman phone number */}
          <Col xs={3}>
          <Form.Group ControlId='phoneNumber'>
              <Form.Label className='customLabel'>Phone Number <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Control size='sm' type='text'></Form.Control>
            </Form.Group>
          </Col>

          {/* Craftsman address */}
          <Col xs={6}>
            <Form.Group ControlId='address'>
              <Form.Label className='customLabel'>Address <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Control size='sm' as='textarea'></Form.Control>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>

        <hr />

        {/* Craftsman's product details */}
        <Row className='mb-2'><h5>Product Details</h5></Row>

        <Row className='mb-3'>
          <Col></Col>
          {/* product name */}
          <Col xs={4}>
            <Form.Group ControlId="productName">
              <Form.Label className='customLabel'>Name of the Product <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Control size='sm' type='text'></Form.Control>
            </Form.Group>
          </Col>

          {/* product category */}
          <Col xs={4}>
          <Form.Group ControlId="ProdocutCategory">
              <Form.Label className='customLabel'>Product Category <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Select size='sm' aria-label='categoryOptions'>
                <option selected disabled>Select Category</option>
                <option>Houseware</option>
                <option>Tableware</option>
                <option>Kitchenware</option>
                <option>Bags</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>

        <Row className='mb-3'>
          <Col></Col>
          <Col xs={8}>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label className='customLabel'>Product Image <Form.Label className='required'>*</Form.Label>
              <Form.Label className='text-muted inputHelp'><i>You can choose multiple files here.</i></Form.Label>
              </Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>

        <Row className='mb-4'>
          <Col></Col>
          <Col xs={8}>
            <FloatingLabel ControlId="floatingTextarea"/>
            <Form.Control as="textarea" placeholder='Describe product: size, color, material or message you want to tell etc.'></Form.Control>
          </Col>
          <Col></Col>
        </Row>

        {/* Craftsman request form close and submit buttons. */}
        <Row>
        <Col>
          <Button id='clearButton' variant='secondary' className='mx-5' onClick={closeRequestModal}>Close</Button>
          <Button id='submitButton'>Submit</Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
    
    </>
  );
};

export default CraftsmanRequest;