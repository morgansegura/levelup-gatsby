import React from "react"
import { Link } from "gatsby"
import { Icon } from "react-icons-kit"
import {ic_search} from 'react-icons-kit/md/ic_search'
import { github, twitter, medium} from "react-icons-kit/entypo"


class Navbar extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {

  //   }
  // }

  // componentDidMount() {

  // }  

  render() {
    return (
      <div className="grid fluid">
        <div className="header__logo" href="/">
          <Link className="headline" to="/">
            Code <span>Boom</span>
          </Link>
        </div>
        <div className="nav__header nav__header__left">
          <ul>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/tutorials">Tutorials</Link>
            </li>
            <li>
              <Link to="/tags">Tags</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
        <div className="nav__header nav__header__right">
          <ul>
            <li className="header__search">
                <Icon className="header__icon header__icon__search" icon={ic_search} /> <input id="searchSite" type="text" placeholder="Search.." />
            </li>
            <li>
              <Link to="/tutorials">
                <Icon className="header__icon" icon={github} />
              </Link>
            </li>
            <li>
              <Link to="/tutorials">
                <Icon className="header__icon" icon={twitter} />
              </Link>
            </li>
            <li>
              <Link to="/tutorials">
                <Icon className="header__icon" icon={medium} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar