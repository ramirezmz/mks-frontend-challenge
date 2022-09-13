import React from 'react'
import { Head, IconContent, BtnBuy, StoreIcon, Span, SpanResult, TitleIcon } from './styled'
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
      <BtnBuy onClick={() => {dispatch(
        handleSidebar(true)
      )}}>
        {sideBar && <SideBar/>}
        <StoreIcon />
        <SpanResult>{itemList.length}</SpanResult>
      </BtnBuy>
    </Head>
  )
}

export default Header
