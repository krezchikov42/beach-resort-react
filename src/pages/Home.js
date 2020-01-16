import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Service from '../components/Service'

const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="Luxurious Rooms" subtitle="Deluxe starting at $299">
            <Link to="/rooms/" className="btn-primary">
               Our Rooms
            </Link>
            </Banner>
        </Hero>
        <Service/>
        </>
    )
}

export default Home

