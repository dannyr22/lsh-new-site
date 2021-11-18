import * as React from "react"
import Cocktail from "src/components/Cocktail.js"
import freshCocktails from "src/images/fresh-cocktails.jpg"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageTemplate from "../components/PageTemplate"

const CocktailList = () => {
  return (
    <Layout>
      <div className="pageWidth">
        <h2 className="PageTitle">Fresh Cocktails</h2>
        <p>
          Delivered to your door seven days a week with same day delivery
          available on all orders placed before 3pm. Simply email, txt or call
          to place your order. Our delivery radius covers 8 miles of SM, Surrey.
        </p>
        <br></br>
        <p>
          Please note all our cocktails are made fresh just before delivery and
          are best enjoyed within 48 hours. See our menu below for what’s
          available, if you can’t see your usual favourite get in touch with us
          and we’re happy to make anything bespoke.
        </p>
        <img src={freshCocktails} alt="cocktail" />
        <Cocktail
          title="Community Spirit- £7/25"
          text="Vodka, Aperol, passionfruit liqueur, fresh lime juice, simple syrup and pineapple juice"
        />
        <Cocktail
          title="English Garden- £7/25"
          text="Gin, elderflower liqueur, fresh lime juice, apple juice and cucumber ribbons"
        />
        <Cocktail
          title="Espresso Martini- £7/25"
          text="Vodka, Kahlua, simple syrup and a shot of fresh espresso"
        />
        <Cocktail
          title="Mojito- £7/25"
          text="White rum, fresh lime juice, simple syrup and mint topped with soda water"
        />
        <Cocktail
          title="Passionfruit Mojito- £7/25"
          text="White rum, Passoã, fresh lime juice, simple syrup and mint topped with soda water"
        />
        <Cocktail
          title="Woo Woo- £7/25"
          text="Vodka, peach schnapps, fresh lime juice and cranberry juice"
        />
        <Cocktail
          title="Sex On The Beach- £7/25"
          text="Vodka, peach schnapps, fresh orange juice, cranberry juice"
        />
        <Cocktail
          title="Cosmopolitan- £7/25"
          text="Vodka, triple sec, fresh lime juice and cranberry juice"
        />
        <Cocktail
          title="Pina Colada- £7/25"
          text="Coconut rum, coconut cream, fresh lime juice and pineapple juice"
        />
        <Cocktail
          title="Porn Star Martini- £7/25"
          text="Vanilla vodka, passionfruit liqueur, fresh lime juice and simple syrup"
        />
        <Cocktail
          title="Dark N’ Stormy- £7/25"
          text="Dark rum, fresh lime juice, fresh ginger shot topped with ginger beer"
        />
        <Cocktail
          title="Moscow Mule- £7/25"
          text="Vodka, fresh lime juice, ginger syrup, cane sugar topped with ginger beer"
        />
        <Cocktail
          title="Watermelon Martini- £7/25"
          text="Vodka, fresh watermelon juice, fresh lime juice and sugar syrup."
        />
        <Cocktail
          title="Long Island Iced Tea- £8/28"
          text="Vodka, gin, tequila, rum, triple sec, fresh lemon juice, simple syrup, topped with Coca Cola"
        />
        <div className="servingSuggestion">
          <h4>Serving Suggestion</h4>
          <p>
            Into a small glass place two ice cubes, pour 185ml per glass of the
            cocktail then sit back and enjoy! Can’t spot your usual favourite?
            Just get in touch with us and we can make anything bespoke to order.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default CocktailList
