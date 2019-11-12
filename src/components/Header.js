import React from "react"
import { Link } from "gatsby"

export default props => (
  <header className="header--fixed">
    <div className="header" bg="light" expand="lg">
      <div className="header__logo" href="/">
        Level Up
      </div>
        <nav className="nav__header">
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About Us
              </Link>            
            </li>
            <li>
              <Link to="/contact">
                Contact Us
              </Link>            
            </li>
          </ul>
        </nav>
      </div>

  </header>
)
