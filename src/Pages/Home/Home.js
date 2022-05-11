import React from 'react'
import Banner from './Banner/Banner'
import Details from './Details/Details'
import HomeAppointment from './HomeAppointment/HomeAppointment'
import HomeContactus from './HomeContactus/HomeContactus'
import Info from './Info/Info'
import Services from './Services/Services'
import Testimonial from './Testimonial/Testimonial'

const Home = () => {
  return (
    <div className=''>
      <Banner />
      <Info />
      <Services />
      <Details />
    <HomeAppointment />
    <Testimonial />
    <HomeContactus />
    </div>
  )
}

export default Home