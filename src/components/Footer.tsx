import React from 'react'

// Bootstrap
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
    return (
        <Container fluid className="footer-wrapper">
            <Row className="no-gutters">
                <Col className="callout col-12">
                    <p>Made with <i>♥️</i> by <a href="https://github.com/JourneyProject" target="_blank">Journey</a>&nbsp;&nbsp;|&nbsp;&nbsp;© 2020 Journey, All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
