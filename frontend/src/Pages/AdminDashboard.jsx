import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import '../Asset/Style/Helaathkam_Page.css';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function AdminDashboard() {
    return (
        <>
            <Row>
                <Col>
                    <Container id='adminHeader'>
                        <p>Hello</p>
                    </Container>
                </Col>
            </Row>
        </>
    );
}

export default AdminDashboard;
