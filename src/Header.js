import React from 'react'
import './App.css'
import Navbar from 'react-bootstrap/Navbar'
import logo from './ownupheaderlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <Navbar className="header" variant="dark">
    <Navbar.Brand className="logo" target="_blank" href="https://www.ownup.com/">
      <img src={logo} height="40" alt="Own Up Logo"/>
    </Navbar.Brand>
    <Navbar.Text className="phone">
      <a href="tel:844-947-2848">
        <FontAwesomeIcon icon={faPhoneAlt} /> (844) 947-2848
      </a>
    </Navbar.Text>
  </Navbar>
)

export default Header
