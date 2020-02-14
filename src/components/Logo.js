import React from "react";
import { Link } from "gatsby"

// Fonts
import 'typeface-source-sans-pro'

// Styled Components
import styled from 'styled-components'
import { palette } from '../assets/styled/colors'

const Logo = styled.div `    
    text-transform: uppercase; 
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  

    & a {
        color: ${palette.primary.contrast};;
        text-decoration: none;
        font-size: 1.125rem;
    }
    & span {
        padding: .5rem 1rem;
        background-color: ${palette.secondary.main};
        color: ${palette.secondary.contrast};
        margin-left: .5rem;        
        font-weight: 900;
    }
`
export default props => (
    <Logo>
        <Link to="/">
            Code <span>Boom</span>
        </Link>        
    </Logo>
)