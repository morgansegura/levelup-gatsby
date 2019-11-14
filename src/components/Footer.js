import React from 'react';

const Footer = props => (
  <footer className="footer">
    {console.log(props)}
    <div className="grid">
      <div className="item-12 item-sm-6">
        <span className="p-lr-1">
            { props.data.nicename } © {new Date().getFullYear()}
        </span>
      </div>
      <div className="item-12 item-sm-6">
        <div className="nav__social">
            <i></i>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;