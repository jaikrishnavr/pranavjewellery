import React from 'react'
import Navbarmenu from '../../Components/Navbar/Navbar'
import Carousel from '../../Components/Carousel/Carousel'
import HomeAbout from './About/About'
import Footer from '../../Components/Footer/Footer'
import Underconstruction from '../../Components/Underconstruction/Underconstruction'

const Home = () => {
  return (
    <div>

<Navbarmenu/>
<Carousel/>
<HomeAbout/>


<Underconstruction/>

<Footer/>

    </div>
  )
}

export default Home