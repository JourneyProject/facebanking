import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

// Bootstrap
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import BerniePhoneImage from '../images/bernie-phone.png'
import { IS_FIREFOX_DESKTOP, IS_MOBILE } from './environment';

const FACEBANK_DEFAULT_TEXT = "Hi! I saw that you liked Bernie's Facebook page. Bernie believes we have a corrupt political and economic system that needs major change. He's running for president to make our economy, our government, and our health care system work for all of us, not just the wealthy few. Are you in for Bernie?"


type HeroProps = {
    onCtaClick(): void
}

function Hero(props: HeroProps) {
    let containerClassNames = "hero-wrapper"
    if (IS_FIREFOX_DESKTOP) { containerClassNames += " firefox" }

    return (
        <Container fluid className={containerClassNames}>
            <Row className="no-gutters">
                <Col className="bernie-phone-mobile d-xs-show d-sm-show d-md-show d-lg-none d-xl-none"><img src={BerniePhoneImage} alt="Bernie Facebanking"></img></Col>
            </Row>
            <Row className="no-gutters">
                <Col className="bernie-phone col-xl-6 col-lg-6 col-md-6 d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block bg-img-none-md bg-50 bg-cover"></Col>
                <Col className="cta-wrapper col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12">
                    <h2>DMs. <i>For Bernie.</i></h2>
                    <p>Phonebanking is awesome. So is textbanking. But what if you want a more direct relationship with the folks you're trying to convince? Facebanking is a way for you to directly message your friends on Facebook <b>who already like Bernie Sanders.</b></p>
                    <h3>How to Facebank?</h3>
                    <ol>
                        <li>Make sure you are already logged into Facebook</li>
                        <li>Click anywhere on the below text to copy it to your clipboard</li>
                        <li>Click the big red button <i>(this will open a new window{!IS_FIREFOX_DESKTOP && <span> into FB Messenger</span>})</i></li>
                        {IS_FIREFOX_DESKTOP && <li>Scroll down on the page that opens. You'll see a list of your friends who have liked Bernie's page. Reach out to them via messenger! <i>(Applicable for Firefox on Desktop Only)</i></li>}
                        {!IS_FIREFOX_DESKTOP && !IS_MOBILE && <li>In the new window, click the <i className="fab fa-facebook-messenger"></i> next to a friends name <i>(Remember, these are friends <b>who already like Bernie</b>)</i></li>}
                        {IS_MOBILE && <li>In the new window, click your friend's name first (important!) then click "<i className="fab fa-facebook-messenger"></i> Message" <i>(Remember, these are friends <b>who already like Bernie</b>)</i></li>}
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