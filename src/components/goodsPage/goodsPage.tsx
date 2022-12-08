import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux_hooks'
import { Goods } from '../../store/slices/goodsSlice'

//write custom hook
const switchCaseFunction = (query: string | undefined, setter: any) => {
  if (query) {
    switch (query) {
      case 'bakery': {
        setter(useAppSelector((state) => state.goods.bakery))
        break
      }
      case 'dessert': {
        setter(useAppSelector((state) => state.goods.dessert))
        break
      }
      case 'drinks': {
        setter(useAppSelector((state) => state.goods.drinks))
        break
      }
      case 'coffee': {
        setter(useAppSelector((state) => state.goods.coffee))
        break
      }
      default: {
        return null
      }
    }
  }
}

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
