import React from 'react'

// Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// Images
import BernieImage from '../images/bernie.png'
import BernieLogo from '../images/bernie-logo.svg'

function Header() {
    return (
        // <div className="header">
        //     <div className="logo"></div>
        //     <div className="menu">
        //         <div className="menu-item">FAQ</div>
        //         <div className="menu-item">CTA</div>
        //     </div>
        // </div>
        // <div className='Header'>
        //     <img className='Logo' alt='Bernie logo' src={BernieImage} />
        //     <div className='Header-dms'>DMs</div>
        //     <div className='Header-for'>for</div>
        //     <div className='Header-bernie'>Bernie</div>
        // </div>

        <Navbar bg="white" expand="lg" sticky="top">
            <Navbar.Brand href="#home">
                {/* DMs for */}
                <img src={BernieLogo} alt="Bernie Logo" className="logo" />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Item>
                    <Nav.Link>What is Facebaking?</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>FAQ</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default Header
