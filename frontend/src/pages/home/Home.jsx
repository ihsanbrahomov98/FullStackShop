import React from 'react'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import Cards from '../../components/Cards'
import ListItems from '../../components/ListItems'
import Counter from '../../app/features/Counter'
import ManBotLine from '../../components/ManBotLine'

const Home = () => {
  return (  <>
    <Navbar/>
    <Slider/>
    <Cards/>
    <ListItems/>
    <Counter/>
    <ManBotLine/>
    
    </>
  )
}

export default Home