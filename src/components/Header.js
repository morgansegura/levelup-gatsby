// Libs
import React from "react"

// Styled Components
import styled from 'styled-components'
import { palette } from '../assets/styled/colors'

const Header = styled.header`
  background-color: ${palette.primary.main};
`

export default props => (
  <Header>
    {props.children} 
  </Header>
)
