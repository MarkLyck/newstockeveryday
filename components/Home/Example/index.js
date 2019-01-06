import React from 'react'
import styled from '@emotion/styled'
import Section, { Title, Subtitle } from 'ui-components/Section'

const Bold = styled.span`
  font-weight: bold;
`
const Underline = styled.span`
  text-decoration: underline;
`
const Italic = styled.span`
  font-weight: 600;
  font-style: italic;
`

const FirstSubtitle = styled(Subtitle)`
  margin-top: 42px;
`

const Section1 = () => (
  <Section>
    <Title>Example stock tip</Title>
    <p>
        Here's what you'll get every week. This is a real suggestion I sent on the 29th of November 2018.
        On the 14th of December this stock sky-rocketed +15% in a single day as other investors caught wind of how undervalued
        this stock was. As of January 6th 2019. This stock is valued at 19.69! That's an an increase of +33.67%
        in just a little over a month.
    </p>

  </Section>
)

export default Section1
