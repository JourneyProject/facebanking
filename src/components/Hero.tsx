import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

// Bootstrap
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import BerniePhoneImage from '../images/bernie-phone.png'
import { IS_FIREFOX_DESKTOP, IS_MOBILE, IS_LOCAL_SERVER } from './environment';

const FACEBANK_DEFAULT_TEXT = "Hi! I saw that you liked Bernie's Facebook page. Bernie believes we have a corrupt political and economic system that needs major change. He's running for president to make our economy, our government, and our health care system work for all of us, not just the wealthy few. Are you in for Bernie?"
const FACEBANK_KLOB_TEXT = "Hi I’m reaching out about the 2020 election! You may know that I’m all in for Bernie because of issues like healthcare and climate change. I noticed you liked Amy Klobuchar's page. Now that she’s dropped out, have you made up your mind about who you’ll be supporting?"
const FACEBANK_PETE_TEXT = "Hi I’m reaching out about the 2020 election! You may know that I’m all in for Bernie because of issues like healthcare and climate change. I noticed you liked Pete Buttigieg’s page. Now that he’s dropped out, have you made up your mind about who you’ll be supporting?"

type HeroProps = {
    analytics: any
}

enum Candidates {
    SANDERS = 'sanders',
    KLOB = 'klobuchar',
    PETE = 'pete'
}

const candidateLinks = {
    sanders: ["https://m.facebook.com/nt/?id=%2Fpages%2Fentity%2Fstream%2F%3Fpage_id%3D124955570892789%26fetcher%3Dfriends_who_liked", 'https://www.facebook.com/pg/berniesanders/community'],
    klobuchar: ["https://m.facebook.com/nt/?id=%2Fpages%2Fentity%2Fstream%2F%3Fpage_id%3D7606381190%26fetcher%3Dfriends_who_liked", "https://www.facebook.com/pg/amyklobuchar/community"],
    pete: ["https://m.facebook.com/nt/?id=%2Fpages%2Fentity%2Fstream%2F%3Fpage_id%3D1039701332716228%26fetcher%3Dfriends_who_liked", "https://www.facebook.com/pg/petebuttigieg1/community"]
}

function Hero(props: HeroProps) {
    function openFacebook(candidate: Candidates) {
        let [mainLink, backupLink] = candidateLinks[candidate]

        if (IS_FIREFOX_DESKTOP) {
            window.open(backupLink, '_blank');
        } else {
            window.open(mainLink, '_blank', 'width=320,height=490');
        }
        if (!IS_LOCAL_SERVER) { props.analytics.track('dm-button-clicked') }
    }

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
                    <Tabs defaultActiveKey={Candidates.SANDERS} id="uncontrolled-tab-example">
                        <Tab eventKey={Candidates.SANDERS} title="Bernie Supporters">
                            <h2>DMs. <i>For Bernie.</i></h2>
                            <p>Phonebanking is awesome. So is textbanking. But what if you want a more direct relationship with the folks you're trying to convince? Facebanking is a way for you to directly message your friends on Facebook <b>who already like Bernie Sanders.</b></p>
                            <h3>How to Facebank?</h3>
                            <ol>
                                <li>Make sure you are already logged into Facebook <i>(in this browser)</i></li>
                                <li>Click anywhere on the below text to copy it to your clipboard</li>
                                <li>Click the big red button <i>(this will open a new window{!IS_FIREFOX_DESKTOP && <span> into FB Messenger</span>})</i></li>
                                {IS_FIREFOX_DESKTOP && <li>Scroll down on the page that opens. You'll see a list of your friends who have liked Bernie's page. Reach out to them via messenger! <i>(Applicable for Firefox on Desktop Only)</i></li>}
                                {!IS_FIREFOX_DESKTOP && !IS_MOBILE && <li>In the new window, click the <i className="fab fa-facebook-messenger"></i> next to a friends name <i>(Remember, these are friends <b>who already like Bernie</b>)</i></li>}
                                {IS_MOBILE && <li>In the new window, click your friend's name <i>(Remember, these are friends <b>who already like Bernie</b>)</i></li>}
                                {IS_MOBILE && <li>Reach out to them via messenger!</li>}
                            </ol>
                            <CopyToClipboard text={FACEBANK_DEFAULT_TEXT}>
                                <Card className="copy-area">
                                    <Card.Body>{FACEBANK_DEFAULT_TEXT}</Card.Body>
                                </Card>
                            </CopyToClipboard>
                            <CopyToClipboard text={FACEBANK_DEFAULT_TEXT}>
                                <Button variant="danger" block size="lg" className="cta" onClick={() => openFacebook(Candidates.SANDERS)}><i className="fab fa-facebook-messenger"></i>&nbsp;&nbsp;Facebank Here!</Button>
                            </CopyToClipboard>
                        </Tab>
                        <Tab eventKey={Candidates.PETE} title="Buttigieg Supporters">
                            <h2>DMs. <i>For Bernie.</i></h2>
                            <p>Phonebanking is awesome. So is textbanking. But what if you want a more direct relationship with the folks you're trying to convince? Facebanking is a way for you to directly message your friends on Facebook <b>who liked Pete Buttigieg</b> and convince them to vote for Bernie.</p>
                            <h3>How to Facebank?</h3>
                            <ol>
                                <li>Make sure you are already logged into Facebook <i>(in this browser)</i></li>
                                <li>Click anywhere on the below text to copy it to your clipboard</li>
                                <li>Click the big red button <i>(this will open a new window{!IS_FIREFOX_DESKTOP && <span> into FB Messenger</span>})</i></li>
                                {IS_FIREFOX_DESKTOP && <li>Scroll down on the page that opens. You'll see a list of your friends who have liked Pete Buttigieg's page. Reach out to them via messenger! <i>(Applicable for Firefox on Desktop Only)</i></li>}
                                {!IS_FIREFOX_DESKTOP && !IS_MOBILE && <li>In the new window, click the <i className="fab fa-facebook-messenger"></i> next to a friends name <i>(Remember, these are friends <b>who liked Pete Buttigieg</b>)</i></li>}
                                {IS_MOBILE && <li>In the new window, click your friend's name <i>(Remember, these are friends <b>who liked Pete Buttigieg</b>)</i></li>}
                                {IS_MOBILE && <li>Reach out to them via messenger!</li>}
                            </ol>
                            <CopyToClipboard text={FACEBANK_PETE_TEXT}>
                                <Card className="copy-area">
                                    <Card.Body>{FACEBANK_PETE_TEXT}</Card.Body>
                                </Card>
                            </CopyToClipboard>
                            <CopyToClipboard text={FACEBANK_PETE_TEXT}>
                                <Button variant="danger" block size="lg" className="cta" onClick={() => openFacebook(Candidates.PETE)}><i className="fab fa-facebook-messenger"></i>&nbsp;&nbsp;Facebank Pete Supporters Here!</Button>
                            </CopyToClipboard>
                        </Tab>
                        <Tab eventKey={Candidates.KLOB} title="Klobuchar Supporters">
                            <h2>DMs. <i>For Bernie.</i></h2>
                            <p>Phonebanking is awesome. So is textbanking. But what if you want a more direct relationship with the folks you're trying to convince? Facebanking is a way for you to directly message your friends on Facebook <b>who liked Amy Klobuchar</b> and convince them to vote for Bernie.</p>
                            <h3>How to Facebank?</h3>
                            <ol>
                                <li>Make sure you are already logged into Facebook <i>(in this browser)</i></li>
                                <li>Click anywhere on the below text to copy it to your clipboard</li>
                                <li>Click the big red button <i>(this will open a new window{!IS_FIREFOX_DESKTOP && <span> into FB Messenger</span>})</i></li>
                                {IS_FIREFOX_DESKTOP && <li>Scroll down on the page that opens. You'll see a list of your friends who have liked Amy Klobuchar's page. Reach out to them via messenger! <i>(Applicable for Firefox on Desktop Only)</i></li>}
                                {!IS_FIREFOX_DESKTOP && !IS_MOBILE && <li>In the new window, click the <i className="fab fa-facebook-messenger"></i> next to a friends name <i>(Remember, these are friends <b>who like Amy Klobuchar</b>)</i></li>}
                                {IS_MOBILE && <li>In the new window, click your friend's name <i>(Remember, these are friends <b>who like Amy Klobuchar</b>)</i></li>}
                                {IS_MOBILE && <li>Reach out to them via messenger!</li>}
                            </ol>
                            <CopyToClipboard text={FACEBANK_KLOB_TEXT}>
                                <Card className="copy-area">
                                    <Card.Body>{FACEBANK_KLOB_TEXT}</Card.Body>
                                </Card>
                            </CopyToClipboard>
                            <CopyToClipboard text={FACEBANK_KLOB_TEXT}>
                                <Button variant="danger" block size="lg" className="cta" onClick={() => openFacebook(Candidates.KLOB)}><i className="fab fa-facebook-messenger"></i>&nbsp;&nbsp;Facebank Klobuchar Supporters Here!</Button>
                            </CopyToClipboard>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero
