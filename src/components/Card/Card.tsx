import React from 'react'
import {CardContainer, Picture, ProducName, ProductInfo, PriceContent, Description, ShoppingBagIcon, AddButton} from './styled'

const Card = () => {
  return (
    <CardContainer>
      <Picture src='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp' />
      <ProductInfo>
        <ProducName>
          Apple Watch Series 4 GPS
        </ProducName>
        <PriceContent>
          R$2.399
        </PriceContent>
      </ProductInfo>
      <Description>
        Redesigned from scratch and completely revised.
      </Description>
      <br/>
      <AddButton>
        <ShoppingBagIcon />
        <h2>COMPRAR</h2>
      </AddButton>
    </CardContainer>
  )
}

export default Card
