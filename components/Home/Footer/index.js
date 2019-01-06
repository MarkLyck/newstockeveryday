import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Price, Button } from 'ui-components'
import BlackSection, { Left, Right } from 'ui-components/BlackSection'

const Footer = styled.footer`
  display; flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  padding: 42px 0;
`

const FooterSection = () => (
  <Footer>
    <p>What are you waiting for? Sign up.</p>
    <p>Oh, and Copyright a.k.a. "Don't steal my shit" 2019 ©</p>
    <Link href='/terms'><a>Terms of Service & Privacy Policy</a></Link>
  </Footer>
)

export default FooterSection
