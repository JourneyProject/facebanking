import React from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
    return (
        <Container fluid className="footer-wrapper">
            <Row className="no-gutters">
                <Col className="callout col-12">
                    <p>Made with <span className="heart" role="img" aria-label="Heart">♥️</span> by <a href="https://github.com/JourneyProject" target="_blank" rel="noopener noreferrer">Journey</a> (not affiliated with Bernie 2020)&nbsp;&nbsp;|&nbsp;&nbsp;© 2020 Journey, All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
