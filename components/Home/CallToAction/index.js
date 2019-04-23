import React from 'react'
import styled from '@emotion/styled'
import PriceContext from 'common/Contexts/PriceContext'
import { Price, Button } from 'ui-components'
import BlackSection, { Left, Right } from 'ui-components/BlackSection'

const Text = styled.p`
  font-size: 1.33em;
  margin-top: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
`

const GuranteeTitle = styled.h3`
  font-size: 2em;
  font-weight: 300;
`

const GuranteeImage = styled.img`
  max-width: 150px;
`

const CallToAction = ({ signupText, guranteeText }) => (
  <BlackSection>
    <Left>
      <PriceContext.Consumer>{({ price }) => <Price color="white">${price}</Price>}</PriceContext.Consumer>
      <Button>SIGN UP NOW</Button>
      <Text>{signupText}</Text>
    </Left>
    <Right>
      <GuranteeImage src="static/images/moneyBackGurantee.png" alt="7 day money back gurantee" />
      <GuranteeTitle>7 Day Moneyback Guarantee</GuranteeTitle>
      <Text>{guranteeText}</Text>
    </Right>
  </BlackSection>
)

export default CallToAction
