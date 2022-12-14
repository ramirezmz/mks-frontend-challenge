import styled from 'styled-components'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export const Sidebar = styled.div`
  background-color: #0F52BA;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 35%;
  display: flex;
  flex-direction: column;
  animation: showSidebar .4s;
  overflow-y: scroll;
  cursor: default;

  > svg {
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 35%;
    }
  }
`

export const CloseOutlineIcon = styled(CloseOutline)`
  color: #fff;
  width: 34px;
  height: 34px;
  padding: 2px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #000;
  border-radius: 50%;
  margin: 0.4rem;
`
export const Content = styled.div`
  color: #fff;
  margin-top: 2.3rem;
  padding: 2rem;
  
`

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  
  h2 {
    color: #fff;
    justify-content: flex-start;
    text-align: start;
    font-weight: 700;
    font-size: 27px;
  }
`

export const Title = styled.div`
  width: 140px;
`

export const ContentResult = styled.div`
  display: flex;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
`

export const BtnBuy = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  width: auto;
  height: 90px;
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;
  
`