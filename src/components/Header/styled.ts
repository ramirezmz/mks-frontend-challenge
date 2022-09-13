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

export const StoreContentButton = styled.div`
  width: 90px;
  height: 45px;
  background-color: #ffff;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000;
`

export const StoreIcon = styled(LocalGroceryStore)`
  width: 19px;
  height: 18px;
  margin-right: 1rem;
`

export const Span = styled.span`
  margin-left: 5px;
  font-size: 20px;
`

export const SpanResult = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`