import * as React from "react"
import Faq from "src/components/Faq.js"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="pageWidth">
      <h2 className="PageTitle">FAQ's</h2>
      <Faq
        title="What is Let’s Stay Home?"
        text="Established in May 2020, Let’s Stay Home was created to get you the freshest cocktails in your hands. We make cocktails and deliver them to your door, can bring our pop up bar and bartend your event or even teach you and your friends how to do it yourself at home with a cocktail masterclass."
      />
      <Faq
        title="How long are the cocktails fresh for?"
        text="Because we use fresh ingredients, our cocktails are best enjoyed within 48 hours of delivery. If you aren't ready to enjoy the cocktail when it's delivered just pop it in the fridge until you are."
      />
      <Faq
        title="When do we deliver?"
        text="We deliver seven days a week, 24 hours a day. You pick the time and address and we’ll be there."
      />
      <Faq
        title="What do I need to do with the cocktails when they are delivered?"
        text="Drink them, you’ve earned it. It’s always 5pm somewhere, they arrive freshly shaken, chilled and ready to drink. Alternatively pop them in the fridge until you’re ready to enjoy them."
      />
      <Faq
        title="How do I order?"
        text="You can call, text or email us 7 days a week with your order, address for delivery and preferred delivery time. All of our contact details are under our contact section click here to view."
      />
      <Faq
        title="I’m planning a party and want cocktails involved, can you help?"
        text="HELL YEAH! No party is complete without cocktails. We’ve catered house parties, weddings and cocktail masterclasses. Contact us about your event today for more information."
      />
      <Faq
        title="I can’t see my favourite cocktail on your menu, can you make it?"
        text="It would be our pleasure, just let us know what it is, we’ll work our magic and have the freshest version to you in no time."
      />
      <Faq
        title="Can I send my friend a cocktail?"
        text="Yes, gold star to you for being such a good friend. As long as they’re over 18 and within an 8 mile radius of SM, Surrey we’re there."
      />
      <Faq
        title="Do you have allergen information?"
        text="Yes! Let us know what cocktail you’re interested in and we can send you all it’s allergen information."
      />
      <Faq
        title="Is it ok to answer the door with my dog?"
        text="This is actually very actively encouraged, Beagles are our favourite but we would love to meet them all."
      />
      <Faq
        title="How many drinks does one bottle serve?"
        text="Four in line with cocktail servings, there is a minimum of 250ml of alcohol in each bottle which is the equivalent of five double shots."
      />
      <Faq
        title="How do I pay?"
        text="We accept bank transfer or cash on delivery."
      />
    </div>
  </Layout>
)

export default SecondPage
