import styled from 'styled-components'
import {ShoppingBag} from '@styled-icons/boxicons-regular/ShoppingBag'

export const CardContainer = styled.figure`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  width: 218px;
  height: 285px;
  margin: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
`
export const Picture = styled.img`
  width: 110px;
  height: 138px;
`

export const ProductInfo = styled.div`
  display: flex;
  padding: 0.3rem;
  align-items: center;
  justify-content: flex-end;
`

export const ProducName = styled.span`
  font-weight: 400;
  font-size: 16px;
  margin:0.2rem;
`

export const PriceContent = styled.div`
  background-color: #373737;
  color: #fff;
  border-radius: 8px;
  padding: 0.4rem;
  font-weight: 700;
  font-size: 15px;
`

export const Description = styled.p`
  margin:0.5rem;
  font-weight: 300;
  font-size: 10px;
  color: #373737;
`

export const ShoppingBagIcon = styled(ShoppingBag)`
  color: #fff;
  width: 19px;
  height: 18px;
  margin-right: 8px;
`

export const AddButton = styled.button`
  background-color: #0F52BA;
  display: flex;
  padding: 0.2rem;
  width: 218px;
  justify-content: center;
  margin-bottom: -2rem;
  border-radius: 0px 0px 10px 10px;
  color: #fff;
  border: none;
  cursor: pointer;
`