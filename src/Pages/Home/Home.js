import React from 'react'
import Appointment from '../Appointment/Appointment'
import Banner from './Banner/Banner'
import Details from './Details/Details'
import Info from './Info/Info'
import Services from './Services/Services'

const Home = () => {
  return (
    <div className=''>
      <Banner />
      <Info />
      <Services />
      <Details />
      <Appointment />
    </div>
  )
}

export default Home