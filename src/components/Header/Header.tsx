import React from 'react'
import { Head, IconContent, StoreContentButton, StoreIcon, Span, SpanResult, TitleIcon } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../SideBar/SideBar'
import { handleSidebar } from '../../features/Store'
import Item from '../../services/interface'

interface StoreItem {
  items: {
    value: Item
  }
}

interface SideBar {
  items: {
    sidebar: boolean
  }
}

const Header = () => {
  const itemList = useSelector((state: StoreItem) => state.items.value)
  const sideBar = useSelector((state: SideBar) => state.items.sidebar)
  const dispatch = useDispatch()

  return (
    <Head>
      <IconContent>
        <TitleIcon>MKS</TitleIcon>
        <Span>Sistemas</Span>
      </IconContent>
      <StoreContentButton>
        <StoreIcon onClick={() => {dispatch(
          handleSidebar(true)
          )}}/>
          {sideBar && <SideBar/>}
        <SpanResult>{itemList.length}</SpanResult>
      </StoreContentButton>
    </Head>
  )
}

export default Header
