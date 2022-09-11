import React, { useEffect } from 'react'
import api from '../services/api'

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url = 'products?page=1&rows=8&sortBy=id&orderBy=DESC'
      const result = await api.get(url)
      console.log(result.data)
    }
    fetchData()
  })
  return (
    <div>
      home test
    </div>
  )
}

export default Home
