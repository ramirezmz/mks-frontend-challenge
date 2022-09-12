import styled from 'styled-components'
import { LocalGroceryStore } from '@styled-icons/material-twotone/LocalGroceryStore'

export const Head = styled.header`
  background-color: #0F52BA;
  height: 101px;
  display: flex;
  justify-content: space-between;
  padding: 1.3rem calc((100vw - 1000px)/ 2);
  color: #fff;
`

export const IconContent = styled.div`
  display: flex;
  align-items: baseline;
`

export const TitleIcon = styled.h1`
  font-weight: 600;
  font-size: 40px;
`

export const BtnBuy = styled.button`
  width: 90px;
  height: 45px;
  background-color: #ffff;
  border-radius: 8px;
  border: none;
`

export const StoreIcon = styled(LocalGroceryStore)`
  color: #000;
  width: 19px;
  height: 18px;
  margin-right: 8px;
`

export const Span = styled.span`
  margin-left: 5px;
  font-size: 20px;
`

export const SpanResult = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`