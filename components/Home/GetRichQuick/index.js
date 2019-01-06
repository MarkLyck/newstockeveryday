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
    <Title>This will <Underline>NOT</Underline> make you rich fast.</Title>
    <p>I gurantee anyone online that claims they are selling you something that will make you rich quickly. Are lying through their teeth.</p>
    <FirstSubtitle>I only do <Bold>Value investing</Bold>, it's what I'm good at</FirstSubtitle>
    <p>The simple rule of value investing, is buying quality stocks that are undervalued. But that's not all there is to it.</p>
    <p>Let's say you've been married for 5 years and you love your wife and some one asks you if you love her. of course you say "Yes!.."</p>
    <p>Prove it! What's the metric? Give me the number that helps me know. Cause when you met her... you didn't love her. Now you love her, right? Tell me the day that "love" happened.</p>
    <p>It's an impossible question! But it's not that it doesn't exist, it's just that it's much easier to prove over time.</p>

    <p>Value investing is the same thing, it's about transitions. If you were to go to the gym, work out, 
    you come back and look in the mirror, you will see... Nothing... And if you go to the gym the next day and come back to the mirror. You will see... Nothing</p>
    <p>So clearly there's no results, it can't be measured, it must not be effective. So we quit!</p>
    <p>Oooor If you fundementally believe that this is the right course of action and you stick with it.
    That's when you see results. If you commit yourself to it, the exercise of doing it consistently... You can screw it up once in a while.
    You can eat a chocolate cake one day, you can skip a day or two. It allows for that. But if you stick with it consistently.
    I'm not exactly sure what day. But I KNOW you'll start seeing results. I know it.</p>
    <p>and the same with value investing. If you invest in quality stocks that are undervalued over a long period of time.
    You WILL see results. It's not about the single investment, it's not about the intensity. It's about consistency!</p>
    <p>Going to the gym for 9 hours does not get you into shape. Working out every day for 20 minutes  
    gets you into shape. The problem is that we treat investments with intensity.
    We invest too much in a few bad things once and we quit. Or worse,
    you get luckyand you think you've cracked the code and invest everything into the next thing
    you convince yourself is a good idea just before it goes bankrupt.</p>
    <p>I don't gurantee that every stock I pick is going to go up. That's impossible. 
    But I can say that if you had followed my stock suggestions the last 2 years <Bold>over 90% of them did</Bold>. 
    Investing in just one of these won't make you rich. But sticking with it consistently over a looong period of time. Will get results.</p>
  </Section>
)

export default Section1
