import React from 'react';
import { Link } from "gatsby"
import { Icon } from "react-icons-kit"
import { github, rss, dribbble } from "react-icons-kit/entypo"

const Footer = props => (
  <footer className="footer">
    {console.log(props)}
    <div className="grid">
      <div className="item-12 item-md-3">
        <div className="nav__social">
          <a href="/" title="">
            <Icon icon={rss} />
          </a>
          <a href="/" title="">
            <Icon icon={github} />
          </a>
          <a href="/" title="">
            <Icon icon={dribbble} />
          </a>
        </div>
      </div>
      <div className="nav__footer item-12 item-md-6">
        <nav className="nav__footer">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__logo item-12 item-md-3">
        <span className="copyright">
          {props.data.nicename} © {new Date().getFullYear()}
        </span>
      </div>
    </div>
  </footer>
)

export default Footer;