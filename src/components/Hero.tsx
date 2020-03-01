import React from 'react'

// Components
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

// Images
import MessengerLogo from '../images/fb-messenger.svg'

type HeroProps = {
    onCtaClick(): void
}

function Hero(props: HeroProps) {
    return (
        <Container fluid className="hero-wrapper">
            <Row className="no-gutters">
                <Col className="bernie-phone col-7"></Col>
                <Col className="cta-wrapper col-5">
                    <h2>DMs. <i>For Bernie.</i></h2>
                    <p>Phonebanking is awesome. So is textbaking. But what if you want a more direct relationship with the folks you're trying to convince? Facebanking is a way for you to directly message your friends on Facebook <b>who already like Bernie Sanders</b></p>
                    <h3>How to Facebank?</h3>
                    <ol>
                        <li>Click the below text to copy it to your clipboard</li>
                        <li>Click the big red button <i>(this will open a new window into FB Messenger)</i></li>
                        <li>In the new window, click the <i className="fab fa-facebook-messenger"></i> next to a friends name <i>(Remember, these are friends <b>who already like Bernie)</b></i></li>
                    </ol>

                    <textarea disabled>Some potential copy to send!</textarea>
                    <Button variant="danger" block size="lg" className="cta" onClick={props.onCtaClick}><i className="fab fa-facebook-messenger"></i>&nbsp;&nbsp;Facebank Here!</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero
