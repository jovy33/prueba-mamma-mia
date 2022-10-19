import React from 'react'
import CardPizza from '../components/CardPizza'

export default function Home() {
  return (
    <div>
      <div className='titulo-home'>
        <h1> ¡Pizzería Mamma Mía! </h1>
        <h6> ¡Tenemos las mejores pizzas que podrás encontrar! </h6>
      </div>
      <div>
        <CardPizza />
      </div>
    </div>
  )
}
