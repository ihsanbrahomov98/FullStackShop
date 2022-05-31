import React from 'react'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import Cards from '../../components/Cards'
import ListItems from '../../components/ListItems'
import Counter from '../../app/features/Counter'


const Home = () => {
  return (  <>
    <Navbar/>
    <Slider/>
    <Cards/>
    <ListItems/>
    <Counter/>
    
    </>
  )
}

export default Home