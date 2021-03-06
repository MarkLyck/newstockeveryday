import { useState } from 'react'
import styled from '@emotion/styled'
import Section, { Title, Subtitle } from 'ui-components/Section'

const questions = [
  {
    question: 'WTF is this?',
    answer: `It's weekly stock investment tips. Real investments, shit that actually works. None of that guru bullshit`,
  },
  {
    question: 'Why is it a weekly cost?',
    answer: `It just makes sense as I share the one stock I invest in every week. Also I don't really need your money, I have other busineses and investments that make fucking bankkkk. I just like teaching and sharing my tips because it's sick for my EGO and works with this killer pricing model I have going on.`,
  },
  {
    question: 'What if I pirate this/share my login?',
    answer: `I'll get your phone number, make a hot chick profile on POF.com, and give every horny guy on there your phone number (and ask them to send nudes). Am I serious? Who knows... really wanna risk it?`,
  },
  {
    question: 'Are the stock picks hard to use? Can you help?',
    answer: `All the stock picks will be just simple BUY and SELL signals. You won't have to short stocks, invest in crypto or any of that more complicated stuff. Simply invest in the picks you want through your own bank or broker.`,
  },
  {
    question: 'Do you offer consulting and stuff?',
    answer: `Yes, but I'm not cheap, and I only work with clients I know I can help crazy amounts (and get a great ROI). I can't help you build a serious portfolio if you're only willing to invest $2.`,
  },
  {
    question: 'Can I request stocks to be evaluated?',
    answer: `That's a brilliant idea, I wish I'd thought of it myself. Oh, I did. Send me an email with the stock ticker and name, I'll try to find time to evaluate them.
\n\n
email: info@newstockeveryweek.com`,
  },
  {
    question: 'What format are the stock picks in?',
    answer: `You can always find the latest stock pick in our dashboard area. By logging in.
        
\n\n
I'll also send you an email when a new stock pick is available so you don't miss out`,
  },
  {
    question: " This isn't very professional seeming",
    answer: `And?
\n\n
It's intentional. I'm a f*cking investor with a massive ego, not a P.C lawyer.`,
  },
  {
    question: 'Will this get me rich fast?',
    answer: `Absolutely NOT. Anyone that claims to make you rich fast is most likely a scam.
\n\n
I do value investing, by finding solid stocks with large market caps that are selling for lower prices than it should be.`,
  },
  {
    question: ' Are all of the stock picks legal? Do you break any laws?',
    answer: `Let me make one thing clear: I never break the law, and never advocate doing so.
\n\n
Some of my stock picks likely break the Terms of Service of a few platforms (investing tools) I use. But as a subscriber it won't ever affect you.
\n\n
Most websites breaks Google's TOS, it's so damn hard NOT to break the rules these days (ever read that iTunes agreement? Me neither.) So of course, to make an omelette, you need to break some eggs. Do you want the edge for success or not?`,
  },
  {
    question: 'Do you have a moneyback guarantee?',
    answer: `Sure, if you're not stoked, hit me up within 7 days, I'll give your cash back, and we'll part ways as friends.`,
  },
  {
    question: 'What day do I get the stock pick each week?',
    answer: `I'll give you a hint, it'll be on a day that ends with the letter Y.`,
  },
  {
    question: 'What happens if I leave?',
    answer: `The price for the next member will go down by a dollar (yay for them), and if you re-join you'll be at the end of the queue.
\n\n
Oh, and you'll have 36 years of bad luck in the form of dreadfully terrible investment choices...`,
  },
  {
    question: 'I have more questions.',
    answer: `Email me at mark.lyck@gmail.com
\n\n
IMPORTANT: The price may go up. And it's too annoying in my system to give you a discount after I respond, and I'm not always immediate with that stuff (I'm a busy guy). I'd recommend just buying, I have a 7 day moneyback guarantee, then ask me your questions. Sounds good? Beautiful.`,
  },
]

const QuestionsList = styled.ul`
    border 1px solid rgba(34,36,38,.15);
    border-radius: 4px;
    &:first-of-type {
        border-top: none;
    }
    p {
        margin-bottom: 0;
    }
    
`

const QuestionLink = styled.p`
  position: relative;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  cursor: pointer;
  padding: 16px;
  padding-left: 32px;
  margin-bottom: 0;
  color: ${props => (props.expanded ? props.theme.colors.black : 'rgba(0,0,0,.4)')};
  font-weight: 500;
  font-size: 1em;

  &::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);

    width: 0;
    height: 0;

    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid rgba(0, 0, 0, 0.4);

    transition: all 0.2s;

    ${props => (props.expanded ? `transform: translateY(-50%) rotate(90deg);` : '')}
    ${props => (props.expanded ? `border-left: 8px solid ${props.theme.colors.black}` : '')}
  }
`

const Answer = styled.p`
  padding: 16px;
  color: ${props => props.theme.colors.black};
`

const Question = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <li>
      <QuestionLink onClick={() => setExpanded(!expanded)} expanded={expanded}>
        {question}
      </QuestionLink>
      {expanded && <Answer>{answer}</Answer>}
    </li>
  )
}

const FAQ = () => (
  <Section>
    <Title>Fine, I'll answer your questions.</Title>
    <QuestionsList>
      {questions.map(entry => (
        <Question key={entry.question} question={entry.question} answer={entry.answer} />
      ))}
    </QuestionsList>
  </Section>
)

export default FAQ
