import React from 'react'
import {
  GoodsData,
  GoodsHeader,
  GoodsImg,
  GoodsItemWrapper,
} from '../goodsPage.style'
import { GoodsReceived } from '../../../API/service'

type GoodsItemType = GoodsReceived & {
  onClick: (item: GoodsReceived) => void
}

const GoodsItem = ({
  id,
  name,
  img,
  price,
  createdAt,
  updatedAt,
  category,
  onClick,
}: GoodsItemType) => {
  const item = {
    id,
    name,
    img,
    price,
    createdAt,
    updatedAt,
    category,
  }
  return (
    <GoodsItemWrapper onClick={() => onClick(item)}>
      <GoodsImg img={`http://localhost:7000/${img}`}></GoodsImg>
      <GoodsData>
        <h3>{name}</h3>
        <span>{price} ₴</span>
      </GoodsData>
    </GoodsItemWrapper>
  )
}

export default GoodsItem
