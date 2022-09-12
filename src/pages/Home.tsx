import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import api from '../services/api'

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url = 'products?page=1&rows=8&sortBy=id&orderBy=DESC'
      const result = await api.get(url)
      console.log(result.data)
    }
    // fetchData()
  })
  return (
    <div>
      <Header />
    </div>
  )
}

export default Home
