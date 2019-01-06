import React from 'react'
import styled from '@emotion/styled'
import Section, { Title, Subtitle } from 'ui-components/Section'

const Bold = styled.span`
  font-weight: bold;
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
    <Title>99.47% of Investors Are Full Of Shit. (real stat)</Title>
    <p>If you're a real one, I love you. If you're not, it's cool, I can make you the real deal, for f*ck all.</p>
    <FirstSubtitle>But who the hell am I?</FirstSubtitle>
    <p><Bold>Five years ago</Bold>, I was broke, and working out of my mother's garage. It wasn't that bad, I had a fan for hot days, and a fridge for red bull.</p>
    <p><Bold>Four years ago</Bold>, I was broke working out of a run-down apartment, making $500/wk as an 'Entrepreneur' investing every penny. But hey, it's a step up from the garage, right?</p>
    <p><Bold>One year after that</Bold>, I made a +197.63% return on my stocks. I was pissed off because I had set the goal of +200%.</p>
    <p>How did I do it? I found a system that works. And it only takes <Italic>one thing like this to change your life.</Italic></p>
    <p><Bold>Six months later</Bold>, I was recruited as a "COO" for a metric shit-tonne of equity in a startup (legit one, working from a startup house), and I had to work out how to blow a Financial App up overnight, with no budget, and get investment.</p>
    <p>We got an 8 figure valuation (and I'd bet both of my kidneys you've heard of our investor!)</p>
    <p>Once again - <Italic>one thing to change your life.</Italic></p>

    <Subtitle>So how does that help you?</Subtitle>
    <p>You're just one click away from the wonders of compound interest. My typical win rate for stock suggestions is 89-92%.</p>
    <p>I help train some of the world's best performing investors, and now I want to help you.</p>
    <p>I don't care if you're a founder, an investor, a marketer, or a shoe shiner - you're going to learn a lot, and you're going to blow peoples minds with the picks I share with you.</p>
  </Section>
)

export default Section1
