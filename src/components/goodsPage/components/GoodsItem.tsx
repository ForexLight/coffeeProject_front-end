import React from 'react'
import { Goods } from '../../../store/slices/goodsSlice'
import {
  GoodsData,
  GoodsHeader,
  GoodsImg,
  GoodsItemWrapper,
} from '../goodsPage.style'

const GoodsItem = ({ id, name, img, price }: Goods) => {
  return (
    <GoodsItemWrapper>
      <GoodsImg img={img}></GoodsImg>
      <GoodsData>
        <h3>{name}</h3>
        <span>{price} ₴</span>
      </GoodsData>
    </GoodsItemWrapper>
  )
}

export default GoodsItem
