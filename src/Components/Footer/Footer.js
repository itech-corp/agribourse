import React from 'react';
import { Row, Col, Container } from 'reactstrap';

function Footer(props) {
    return (
        <div>
            <Row>
                <Col xs={12}>
                    <Container>
                       <p>
                        <a href="/">
                            By itech
                        </a>
                    </p> 
                    </Container>
                    
                </Col>
            </Row>
        </div>
    );
}

export default Footer;