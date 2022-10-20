import React from 'react'
import MyContext from '../my_context';
import { useContext } from "react";
import CardPizza from '../components/CardPizza'
import Header from '../components/Header'

export default function Home() {
  const { pizzas } = useContext(MyContext)

  return (
    <div>
      <Header />
      <div className='div-card-pizzas'>
        <div className='div-card-pizzas-interno'>
          {
            pizzas.map((pizza, i) => (
              <CardPizza key={i} pizza={pizza} index={i} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
