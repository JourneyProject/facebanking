import React from 'react'

// Bootstrap
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import CopyToClipboard from 'react-copy-to-clipboard';

const FACEBANK_DEFAULT_TEXT = 'Hi! Election day in your state is March 3rd! Will you be voting for Bernie?'

type HeroProps = {
    onCtaClick(): void
    isFirefox: boolean
}

function Hero(props: HeroProps) {
    let containerClassNames = "hero-wrapper"
    if (props.isFirefox) { containerClassNames += " firefox" }

    return (
        <Container fluid className={containerClassNames}>
            <Row className="no-gutters">
                <Col className="bernie-phone col-7"></Col>
                <Col className="cta-wrapper col-5">
                    <h2>DMs. <i>For Bernie.</i></h2>
                    <p>Phonebanking is awesome. So is textbanking. But what if you want a more direct relationship with the folks you're trying to convince? Facebanking is a way for you to directly message your friends on Facebook <b>who already like Bernie Sanders.</b></p>
                    <h3>How to Facebank?</h3>
                    <ol>
                        <li>Click anywhere on the below text to copy it to your clipboard</li>
                        <li>Click the big red button <i>(this will open a new window into FB Messenger)</i></li>
                        {props.isFirefox && <li>In the new window, just click the link below and scroll down on the page that opens. You'll see a list of your friends who have liked Bernie's page. Reach out to them via messenger! <i>(Applicable for Firefox on Desktop Only)</i></li>}
                        <li>In the new window, click the <i className="fab fa-facebook-messenger"></i> next to a friends name <i>(Remember, these are friends <b>who already like Bernie)</b></i></li>
                    </ol>
                    <CopyToClipboard text={FACEBANK_DEFAULT_TEXT}>
                        <Card className="copy-area">
                            <Card.Body>{FACEBANK_DEFAULT_TEXT}</Card.Body>
                        </Card>
                    </CopyToClipboard>
                    <CopyToClipboard text={FACEBANK_DEFAULT_TEXT}>
                        <Button variant="danger" block size="lg" className="cta" onClick={props.onCtaClick}><i className="fab fa-facebook-messenger"></i>&nbsp;&nbsp;Facebank Here!</Button>
                    </CopyToClipboard>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero
