import React from 'react'
import { Picture, Title, Price, Content, Quantium, CloseOutlineIcon } from './styled'
import Item from '../../services/interface'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../../features/Store'

const MinCard = ({photo, name, price, id}: Item) => {
  const dispatch = useDispatch()

  return (
    <Content>
      <Picture src={photo} />

      <Title>{name}</Title>
      <Quantium>
        <label>Qtd.</label>
        <input type="number" />
      </Quantium>
      <Price>R${price}</Price>
      <CloseOutlineIcon 
        onClick={() => {
          dispatch(removeProduct({
            id
          }))
        }}
      />
    </Content>
  )
}

export default MinCard
