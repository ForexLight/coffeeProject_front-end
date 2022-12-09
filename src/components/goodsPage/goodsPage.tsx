import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux_hooks'
import { Goods } from '../../store/slices/goodsSlice'
import GoodsItem from './components/GoodsItem'
import styled from 'styled-components'
import { heights } from '../../styled/css.vars'
import { GoodsHeader, GoodsSection } from './goodsPage.style'

const GoodsPageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  height: ${heights.withoutHeader};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GoodsPage = () => {
  const params = String(useParams().value)
  let data = useAppSelector((state) => state.goods)
  const res =
    params != undefined &&
    useAppSelector((state) => state.goods)[params as keyof typeof data].map(
      (i) => <GoodsItem key={i.id} {...i} />,
    )

  console.log(res)

  return (
    <GoodsPageWrapper>
      <GoodsHeader>{params}</GoodsHeader>

      <GoodsSection>{res}</GoodsSection>
    </GoodsPageWrapper>
  )
}

export default GoodsPage
