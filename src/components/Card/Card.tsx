import React from 'react'
import {
  CardContainer, 
  Picture,
  ProducName, 
  ProductInfo, 
  PriceContent, 
  Description, 
  ShoppingBagIcon, 
  AddButton
} from './styled'
import Item from '../../services/interface'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../features/Store'

const Card = ({description, name, photo, price}: Item) => {

  const list = useSelector((state) => state.items.value)
  const dispatch = useDispatch()
  return (
    <CardContainer>
      <Picture src={photo} />
      <ProductInfo>
        <ProducName>
          {name}
        </ProducName>
        <PriceContent>
          R${price}
        </PriceContent>
      </ProductInfo>
      <Description>
        {description}
      </Description>
      <br/>
      <AddButton
          onClick={() => {
            dispatch(addProduct({
              id: list.length + 1,
              name,
              photo,
              price,
              description,
            }))
          }}
        >
        <ShoppingBagIcon />
        <h2>COMPRAR</h2>
      </AddButton>
    </CardContainer>
  )
}

export default Card
