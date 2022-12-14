import styled from 'styled-components'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export const Content = styled.div`
  background-color: #fff;
  width: 379px;
  height: 95px;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  color: #000;
  display: flex;
  align-items: center;
  padding: 1rem;
  position: relative;
`

export const Picture = styled.img`
  width: 50px;
  height: 58px;
`

export const Quantium = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    width: 3rem;
  }
`

export const Title = styled.span`
  font-weight: 400;
  font-size: 15px;
  text-align: start;
  margin: 0.4rem;
`

export const Price = styled.span`
  font-weight: 700;
  font-size: 17px;
  margin: 0.4rem;
`

export const CloseOutlineIcon = styled(CloseOutline)`
  width: 1.5rem;
  padding: 1px;
  color: #fff;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
`