import React from 'react'
import styled from '@emotion/styled'
import BlackSection, { Left, Right } from 'ui-components/BlackSection'

const Quote = styled.h2`
    font-size: 2em;
    font-weight: 300;
`

const Author = styled.h2`
    font-size: 1.33em;
    font-weight: 400;
    margin-top: 8px;
`

const BlackTestimonials = () => (
  <BlackSection>
    <Left>
        <Quote>"If you don't sign up, f*cking crazy."</Quote>
        <Author>- Jared Codling</Author>
    </Left>
    <Right>
        <Quote>"This guy is a prodigy!"</Quote>
        <Author>- Amanda Oliver</Author>
    </Right>
  </BlackSection>
)

export default BlackTestimonials
