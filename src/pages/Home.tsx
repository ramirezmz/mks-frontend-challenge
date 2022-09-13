import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import api from '../services/api'
import {ContentItems} from './styled'
import Item from '../services/interface'

const Home = () => {
   const [list, setList ] = useState([])
   const [isLoading, setIsLoading] = useState(false)


   useEffect(() => {
    const fetchData = async () => {
       const url = 'products?page=1&rows=8&sortBy=id&orderBy=DESC'
       const result = await api.get(url)
       setList(result.data.products)
       setIsLoading(false)
    }
     fetchData()
   }, [list])
  return (
    <div>
      <Header />
      <ContentItems>
        {isLoading && <p>Loading...</p>}
        {list.map((item: Item) => {
          return (
            <Card
              id={item.id}
              name={item.name}
              description={item.description}
              photo={item.photo}
              price={item.price}
              key={item.id}/>
          )})}
      </ContentItems>
      <Footer />
    </div>
  )
}

export default Home
