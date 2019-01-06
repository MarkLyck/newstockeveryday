import React from 'react'
import { Button } from 'ui-components'
import { NavBar, Logo, NavLinks } from './styles'

const Navbar = () => (
  <NavBar>
    <Logo />
    <NavLinks>
      <Button small hollow>LOG IN</Button>
      <Button small>SIGN UP</Button>
    </NavLinks>
  </NavBar>
)

export default Navbar
