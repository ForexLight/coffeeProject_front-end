import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux_hooks'
import GoodsItem from './components/GoodsItem'
import { GoodsHeader, GoodsSection, GoodsWrapper } from './goodsPage.style'
import usePagination from '../../hooks/usePagination'
import PaginationController from '../pagination/PaginationController'
import { Goods } from '../../store/slices/goodsSlice'
import { addCartItems, cartItem } from '../../store/slices/cartSlice'

const GoodsPage = () => {
  const params = String(useParams().value)
  let data = useAppSelector((state) => state.goods)
  const resArr: JSX.Element[] = []
  const dispatcher = useAppDispatch()

  const goodsClickHandler = (item: Goods | cartItem) => {
    dispatcher(addCartItems(item))
  }
  const res =
    params != undefined &&
    useAppSelector((state) => state.goods)[params as keyof typeof data].map(
      (i) => {
        resArr.push(
          <GoodsItem
            key={i.id}
            img={i.img}
            price={i.price}
            name={i.name}
            id={i.id}
            onClick={goodsClickHandler}
          />,
        )
      },
    )
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 6,
    count: resArr.length,
  })

  return (
    <GoodsWrapper>
      <GoodsHeader>{params}</GoodsHeader>
      <GoodsSection>
        {resArr.slice(firstContentIndex, lastContentIndex)}
      </GoodsSection>
      <PaginationController
        nextPage={nextPage}
        page={page}
        prevPage={prevPage}
        setPage={setPage}
        totalPages={totalPages}
      />
    </GoodsWrapper>
  )
}

export default GoodsPage
