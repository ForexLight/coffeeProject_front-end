import React from 'react'
import { Goods } from '../../../store/slices/goodsSlice'
import {
  GoodsData,
  GoodsHeader,
  GoodsImg,
  GoodsItemWrapper,
} from '../goodsPage.style'
type GoodsItemType = Goods & {
  onClick: (item: Goods) => void
}

const GoodsItem = ({ id, name, img, price, onClick }: GoodsItemType) => {
  const item = {
    id,
    name,
    img,
    price,
  }
  return (
    <GoodsItemWrapper onClick={() => onClick(item)}>
      <GoodsImg img={img}></GoodsImg>
      <GoodsData>
        <h3>{name}</h3>
        <span>{price} ₴</span>
      </GoodsData>
    </GoodsItemWrapper>
  )
}

export default GoodsItem
