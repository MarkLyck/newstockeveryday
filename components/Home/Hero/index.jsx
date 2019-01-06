import React from 'react'
import styled from '@emotion/styled'
import { Subtitle, Text, Price, Button, Disclaimer } from 'ui-components'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 700px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(245, 245, 245, 1) 100%);
  text-align: center;
`

const MainTitle = styled.h1`
  margin-top: 3em;
  font-size: 2.6em;
  font-weight: 300;
  margin-bottom: 16px;
`

const Underline = styled.span`
  text-decoration: underline;
`

const HeroPrice = styled(Price)`
  margin-top: 24px;
`

const HeroSection = () => (
  <Hero>
    <MainTitle>Get a new Stock pick Every Week</MainTitle>
    <Subtitle>(a real one, that actually beats the market)</Subtitle>
    <p>
      <Underline>Price goes up by $1/wk with every signup</Underline> - Lock in todays price forever
    </p>
    <HeroPrice>$102</HeroPrice>
    <Button>SIGN UP NOW</Button>
    <Disclaimer>No lock-in contract, cancel any time</Disclaimer>
  </Hero>
)

export default HeroSection
