import Navbar from 'components/Home/Navbar'
import Hero from 'components/Home/Hero'
import InvestorsFullOf from 'components/Home/InvestorsFullOf'
import BlackTestimonials from 'components/Home/BlackTestimonials'
import GetRichQuick from 'components/Home/GetRichQuick'
import Example from 'components/Home/Example'

import CallToAction from 'components/Home/CallToAction'
import FAQ from 'components/Home/FAQ'
import Footer from 'components/Home/Footer'

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <InvestorsFullOf />
      <BlackTestimonials />
       <GetRichQuick />
      <CallToAction
        signupText="Price will rise by $1/wk every time someone signs up. Sign up now and lock in this price forever."
        guranteeText="If you don't absolutely LOVE the stock picks, then I'll give your money back. You have nothing to lose."
      />
     <Example />
      <CallToAction
        signupText="Did I mention the price is going up? Because... the price is going up."
        guranteeText="An actual one. I'll give your cash back, and I'm super easy to track down."
      />
      <FAQ />
      <CallToAction
        signupText="I actually don't have anything left to say."
        guranteeText="I'm honestly in disbelief that you haven't signed up yet."
      />
      <Footer />
    </React.Fragment>
  )
}

export default Home
