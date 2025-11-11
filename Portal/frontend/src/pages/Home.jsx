import React, { useContext, useEffect } from 'react'
import Hero from '../components/Hero'
import PopularVacancies from '../components/PopularVacancies'
import HowWorks from '../components/HowWorks'
import Categories from '../components/Categories'
import Jobs from '../components/Jobs'
import { AppContext } from '../context/AppContext'

const Home = () => {
  const {setQuery} = useContext(AppContext)
  
  useEffect(() => {
    setQuery(""); // reset search when visiting home
  }, []);

  return (
    <div>
      <Hero />
      <PopularVacancies />
      <HowWorks/>
      <Categories />
      <Jobs/>
    </div>
  )
}

export default Home
