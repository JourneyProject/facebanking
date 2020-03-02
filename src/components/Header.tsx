import React from 'react'

// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// Images
import BernieImage from '../images/bernie.png'
import BernieLogo from '../images/bernie-logo.svg'

function Header() {
    return (
        <Navbar bg="white" expand="lg" sticky="top">
            <Navbar.Brand href="#home">
                {/* DMs for */}
                <img src={BernieLogo} alt="Bernie Logo" className="logo" />
            </Navbar.Brand>
            {/* <Nav className="ml-auto">
                <Nav.Item>
                    <Nav.Link>What is Facebaking?</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>FAQ</Nav.Link>
                </Nav.Item>
            </Nav> */}
        </Navbar>
    )
}

export default Header
