import React from 'react'
import Navbar from "./components/Navbar"
import Filters from "./components/Filters"
import Offers from "./components/Offers"
import Restaurants from './components/Restaurants'
import userInfo from "./data/userInfo.json"
import offersImg from './data/offers.json'
import restaurants from "./data/restaurant.json"
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar userInfo={userInfo.location}/>
      <Offers offers={offersImg}/>

      <section class="near-you">
      <Filters/>
      <Restaurants restaurants={restaurants}/>
      </section>
      
    </div>
  )
}

export default App