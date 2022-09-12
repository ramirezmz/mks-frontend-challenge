import React from 'react'
import { Head, IconContent, BtnBuy, StoreIcon, Span, SpanResult, TitleIcon } from './styled'

const Header = () => {
  return (
    <Head>
      <IconContent>
        <TitleIcon>MKS</TitleIcon>
        <Span>Sistemas</Span>
      </IconContent>
      <BtnBuy>
        <StoreIcon />
        <SpanResult>0</SpanResult>
      </BtnBuy>
    </Head>
  )
}

export default Header
