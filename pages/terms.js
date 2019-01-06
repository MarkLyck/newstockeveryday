import React from 'react'
import styled from '@emotion/styled'
import { Subtitle } from 'ui-components'

const TermsContainer = styled.div`
    padding: 64px;
`

const Title = styled.h2`
    font-size: 3rem;
`

const Text = styled.p`
    margin: 16px 0;
`


const TermsAndPrivacyPolicy = () => (
  <TermsContainer>
    <Title>Privacy Policy & Terms of Service</Title>
    <Text>Last updated: 6th January 2019</Text>
    <Subtitle>What information do we collect?</Subtitle>
    <Text>If you purchase, we just get your name and email.</Text>
    <Text>If you don't purchase, we pixel you with Google and Facebook, so we can retarget you. This involves cookies, and not the delicious kind.</Text>
    <Text>We also track where you go on the site, if you buy. If you don't, well, this site only has one page externally facing (aside from this policy, which has no tracking), so we just track that you came there.</Text>

    <Subtitle>How do we protect your information?</Subtitle>
    <Text>Hosting has decent security, and we don't give your info to anyone else.</Text>

    <Subtitle>When do we contact you?</Subtitle>
    <Text>By purchasing, you let us contact you via email. We'll rarely do it.</Text>

    <Subtitle>Third Party stuff</Subtitle>
    <Text>We may embed YouTube, and various pixels (like Facebook).</Text>

    <Subtitle>Refund Policy</Subtitle>
    <Text>This is a digital product, so we DON'T give refunds, because once you've accessed it, you have it. We DO have a 7-day moneyback guarantee, which only lasts for 7 days from the date/time of purchase. If you miss this, you're not entitled to a refund for any reason.</Text>
    
    <Subtitle>Your Consent</Subtitle>
    <Text>You agree to all of the above, or don't buy from us.</Text>

    <Subtitle>How do I contact you?</Subtitle>
    <Text>Contact via email: mark.lyck@gmail.com</Text>
    <Text>Physical address for the company is Puerto Sotogrande, Ribera Del Pez Luna, 11310, Spain</Text>

    <Subtitle>Company Details</Subtitle>
    <Text>We bill using Stripe. Any issues, use the contact details above.</Text>
  </TermsContainer>
)

export default TermsAndPrivacyPolicy
