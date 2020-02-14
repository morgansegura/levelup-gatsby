// Libs
import React from "react"
import { Link } from "gatsby"

// Components
import Logo from './Logo'
import { Icon } from "react-icons-kit"
import {ic_search} from 'react-icons-kit/md/ic_search'
import { github, twitter, medium} from "react-icons-kit/entypo"
// import { menu } from 'react-icons-kit/entypo/menu'

// Fonts
import 'typeface-source-sans-pro'

// Styled Components
import styled from 'styled-components'
import { device } from '../assets/styled/device'
import { palette } from '../assets/styled/colors'

const Grid = styled.div `
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: grid;  
  align-items: center;

  @media ${device.mobile} {
    padding-left: 1rem;    
    padding-right: 1rem;
    grid-template-columns: 1fr 5fr 1fr;
  }
  @media ${device.tablet} {
    padding-left: 2rem;    
    padding-right: 2rem; 
    grid-template-columns: 1fr 5fr 1fr;  
  }  

`

const Col = styled.nav `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;

  & a {
    color: ${palette.primary.contrast};
    font-weight: 500;
    text-decoration: none;
    padding: .25rem .5rem;
  }
  & svg {
    fill: ${palette.primary.contrast};
    width: 20px;
    height: 20px;
  }
`

const Search = styled.div `
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: flex-end;  

  & svg {
    fill: ${palette.primary.contrast};
    width: 25px;
    height: 25px;
  }

  input {
    border: 1px solid ${palette.primary.contrast};
    background-color: ${palette.primary.light};
    box-shadow: none;
    padding: .45rem;
    border-radius: 6px;

    @media ${device.mobile} {
      display: none;
    }
    @media ${device.tablet} {
      display: inherit;
    }      
  }
`
const Social = styled(Col)  `
  display: none;
`
const Nav = styled(Col) `

`

const Navbar = props => (
  <Grid>    
    <Logo />    
    <Nav>
      <Link to="/articles">Articles</Link>
      <Link to="/tutorials">Tutorials</Link>
      <Link to="/tags">Tags</Link>
      <Link to="/categories">Categories</Link>
    </Nav>
    <Search>
      <Icon icon={ic_search} /> 
      <input id="searchSite" type="text" placeholder="Search.." />
    </Search>
    <Social>
      <Link to="/tutorials">
        <Icon icon={github} />
      </Link>
      <Link to="/tutorials">
        <Icon icon={twitter} />
      </Link>
      <Link to="/tutorials">
        <Icon icon={medium} />
      </Link>
    </Social>
  </Grid>
)

export default Navbar