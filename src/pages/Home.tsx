import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import api from '../services/api'
import {ContentItems} from './styled'

const Home = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = 'products?page=1&rows=8&sortBy=id&orderBy=DESC'
  //     const result = await api.get(url)
  //     console.log(result.data)
  //   }
  //   fetchData()
  // })
  return (
    <div>
      <Header />
      <ContentItems>
        <Card />
        <Card />
        <Card />
        <Card />
      </ContentItems>
      <Footer />
    </div>
  )
}

export default Home
