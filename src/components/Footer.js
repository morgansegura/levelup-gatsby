import React from 'react';
import { Link } from "gatsby"
import { Icon } from "react-icons-kit"
import { github, rss, dribbble } from "react-icons-kit/entypo"

const Footer = props => (
  <footer className="footer">

    <div className="footer__inner">

      <div className="nav__social">
        <a aria-label={`RSS feed icon for ${props.data.nicename}`} href="/" title="">
          <Icon icon={rss} />
        </a>
        <a aria-label={`Github.com icon for ${props.data.nicename}`} href="/" title="">
          <Icon icon={github} />
        </a>
        <a aria-label={`Dribbble.com icon for ${props.data.nicename}`} href="/" title="">
          <Icon icon={dribbble} />
        </a>
      </div>

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

      <div className="copyright">
        <span className="">
          {props.data.nicename} © {new Date().getFullYear()}
        </span>
      </div>
    </div>
  </footer>
)

export default Footer;