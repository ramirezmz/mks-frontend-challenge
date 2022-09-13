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
import { useDispatch } from 'react-redux'
import { addProduct } from '../../features/Store'

const Card = ({description, name, photo, price, id}: Item) => {
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
              name,
              photo,
              price,
              description,
              id
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
