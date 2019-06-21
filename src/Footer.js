import React from 'react'
import './App.css'

const Footer = () => (
  <React.Fragment>
  <footer>
  <div className="footer-links">
    <div className="link">
      <a href="https://www.ownup.com/" rel="noopener noreferrer" target="_blank">Own Up</a>
    </div>
    <div className="link">
      <a href="https://www.ownup.com/privacy" rel="noopener noreferrer" target="_blank">Privacy</a>
    </div>
    <div className="link">
      <a href="https://www.ownup.com/terms-conditions" rel="noopener noreferrer" target="_blank">Terms of Service</a>
    </div>
    <div className="link">
      <a href="https://www.ownup.com/licensing" rel="noopener noreferrer" target="_blank">Licensing</a>
    </div>
    <div>
      <a href="https://resources.ownup.com/" rel="noopener noreferrer" target="_blank">Education</a>
    </div>
  </div>
  <div>Created for Own Up by K Strickland</div>
  <div>
    <a href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1450805" rel="noopener noreferrer" target="_blank">NMLS: #1450805</a>
  </div>
  </footer>
  </React.Fragment>
)

export default Footer
