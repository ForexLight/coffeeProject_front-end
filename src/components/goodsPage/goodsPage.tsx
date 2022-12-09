import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux_hooks'
import { Goods } from '../../store/slices/goodsSlice'

//write custom hook

const GoodsPage = () => {
  const params = String(useParams().value)
  let data = useAppSelector((state) => state.goods)
  const res =
    params != undefined &&
    useAppSelector((state) => state.goods)[params as keyof typeof data]

  console.log(res)

  return <div>{params}</div>
}

export default GoodsPage
