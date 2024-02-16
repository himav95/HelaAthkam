import { Modal, Button, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

// import Hela athkam: form css file here.
import '../Asset/Style/Helaathkam_Form.css';


function SpecialEdit ({ isEditionModalOpen, closeEditionModal }) {
  return (
    <>
    
    {/* Spedial edition request modal */}
    <Modal show={isEditionModalOpen} onHide={closeEditionModal} backdrop="static" size='lg' >
      {/* className='modal modal-dialog-scrollable' : not sure what suit the most */}
      <Modal.Header id='specialEditionHeader' closeButton>
        <Modal.Title><h3>Special Edition Request</h3></Modal.Title>
      </Modal.Header>

      {/* Special edition request content within modal body. */}
      <Modal.Body>
        <Row className='mb-3'><h5 className='text-muted'>Customer Details</h5></Row>

        {/* special edition request form: Customer details */}
        <Row className='mb-3'>
          <Col></Col>
          {/* customer name */}
          <Col xs={4}>
            <Form.Group ControlId="Name">
              <Form.Label className='customLabel'>Name <Form.Label className="required">*</Form.Label></Form.Label>
              <Form.Control  className='customControl' id='fullName' size='sm' type="text" autoFocus></Form.Control>
            </Form.Group>
          </Col>

          {/* customer email address */}
          <Col xs={4}>
            <Form.Group controlId='email'>
              <Form.Label className='customLabel'>Email <Form.Label className="required">*</Form.Label></Form.Label>
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
              <Form.Label className='customLabel'>Phone Number <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Control size='sm' type='text'></Form.Control>
            </Form.Group>
          </Col>
          <Col xs={4}></Col>
          <Col></Col>
        </Row>

        <hr />

        {/* Special edition form: Request details */}
        <Row className='mb-3'><h5 className='text-muted'>Request Details</h5></Row>

        {/* Select the product; up for the change */}
        <Row className='mb-3'>
          <Col></Col>
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
              </Form.Select>
            </Form.Group>
          </Col>

          {/* product */}
          <Col xs={4}>
            <Form.Group ControlId='Product'>
              <Form.Label className='customLabel'>Product <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Select size='sm' aria-label='product'>
                <option selected disabled>Select Product</option>
                <option></option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>

        {/* edition describe */}
        <Row className='mb-3'>
          <Col></Col>
          {/* Request describe label */}
          <Col xs={2}>
            <Form.Label className='customLabel' htmlFor='describeTextArea'>Describe:</Form.Label>
          </Col>

          {/* Request describing text area */}
          <Col xs={6}>
            <Form.Control as="textarea" placeholder='Describe the changes: Size, Color, Shape..' id='describeTextArea'/>
          </Col>
          <Col></Col>
        </Row>

        {/* Request quantity and delivery date */}
        <Row className='mb-5'>
          <Col></Col>
          {/* quantity */}
          <Col xs={4}>
          <Form.Group ControlId="Quantity" className='mb-3'>
              <Form.Label className='customLabel'>Quantity <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Control size='sm' type='text'></Form.Control>
            </Form.Group>
          </Col>

          {/* delivery date */}
          <Col xs={4}>
          <Form.Group ControlId='deliveryDate'>
              <Form.Label className='customLabel'>delivery Date <Form.Label className='required'>*</Form.Label></Form.Label>
              <Form.Control size='sm' type='date'></Form.Control>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>

        {/* Special edition form close and submit buttons. */}
        <Row>
        <Col>
          <Button id='editionClearButton' variant='secondary' className='mx-5' onClick={closeEditionModal}>Close</Button>
          <Button id='editionSubmitButton'>Submit</Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
    
    </>
  );
};

export default SpecialEdit;