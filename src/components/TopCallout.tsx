import React from 'react'

// Bootstrap
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TopCallout() {
    return (
        <Container fluid className="top-callout-wrapper">
            <Row className="no-gutters">
                <Col className="callout col-12">
                    <p>Super Tuesday is <i>this Tuesday!</i> Reach out to friends from Super Tuesday states!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default TopCallout
