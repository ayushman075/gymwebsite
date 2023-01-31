import React from 'react'
import MainHeader from '../../components/MainHeader'
import Navbar from '../../components/Navbar'
import Programs from '../../components/Programs'
import './Home.css'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <MainHeader/>
    <Programs/>
    </div>
  )
}

export default Home