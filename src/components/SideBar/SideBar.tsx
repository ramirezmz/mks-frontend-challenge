import React from 'react'
import { Sidebar, CloseOutlineIcon, Content, ContentTitle, Title, ContentResult, BtnBuy } from './styled'
import MinCard from '../MinCard/MinCard'
import { useDispatch, useSelector } from 'react-redux'
import { handleSidebar } from '../../features/Store'
import Item from '../../services/interface'

interface StoreItems {
  items: {
    value: Item
  }
}

const SideBar = () => {
  const dispatch = useDispatch()
  const selectedItems = useSelector((state: StoreItems) => state.items.value)
  
  return (
    <Sidebar>
      <ContentTitle>
        <Title>
          <h2>Carrinho de compras</h2>
        </Title>
        <CloseOutlineIcon onClick={
          () => {dispatch(handleSidebar(false))}
        }/>
      </ContentTitle>
      <Content>
        {selectedItems.map((item) => {
          return (
            <MinCard 
              id={item.id}
              photo={item.photo}
              price={item.price}
              name={item.name}
              key={item.id}/>
          )
        })}
      </Content>
      <ContentResult>
        <p>Total:</p>
        <span>R$1232</span>
      </ContentResult>
      <BtnBuy>
        Finalizar Compra
      </BtnBuy>
    </Sidebar>
  )
}

export default SideBar
