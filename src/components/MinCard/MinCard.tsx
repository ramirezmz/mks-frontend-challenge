import React from 'react'
import { Picture, Title, Price, Content, Quantium } from './styled'
import Item from '../../services/interface'

const MinCard = ({photo, name, price, id}: Item) => {
  return (
    <Content>
      <Picture src={photo}>
      </Picture>
      <Title>
        {name}
      </Title>
      <Quantium>
        <label>Qtd.</label>
        <input type="number" />
      </Quantium>
      <Price>R${price}</Price>
    </Content>
  )
}

export default MinCard
