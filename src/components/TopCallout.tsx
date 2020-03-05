import React from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TopCallout() {
    return (
        <Container fluid className="top-callout-wrapper">
            <Row className="no-gutters">
                <Col className="callout col-12">
                    <p>Idaho, Michigan, Mississippi, Missouri, North Dakota, Washington vote <i>this Tuesday!</i></p>
                </Col>
            </Row>
        </Container>
    )
}

export default TopCallout
