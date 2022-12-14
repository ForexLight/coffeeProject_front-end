import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux_hooks'
import GoodsItem from './components/GoodsItem'
import { GoodsHeader, GoodsSection, GoodsWrapper } from './goodsPage.style'
import usePagination from '../../hooks/usePagination'
import PaginationController from '../pagination/PaginationController'
import { fetchGoods } from '../../store/slices/goodsSlice'
import { addCartItems } from '../../store/slices/cartSlice'
import { BackButton } from '../../styled/sharedComponents'
import { AppDispatch } from '../../store'
import { GoodsReceived } from '../../API/service'

const GoodsPage = () => {
  const params = String(useParams().value)
  let data = useAppSelector((state) => state.goods)
  const resArr: JSX.Element[] = []
  const dispatcher = useAppDispatch()
  const navigator = useNavigate()

  useEffect(() => {
    console.log('loading')
    dispatcher(fetchGoods())
  }, [])
  const goodsClickHandler = (item: GoodsReceived) => {
    dispatcher(addCartItems(item))
  }
  const res =
    params != undefined &&
    useAppSelector((state) =>
      state.goods.goods.map((i) => {
        i.category === params &&
          resArr.push(
            <GoodsItem
              key={i.id}
              img={i.img}
              price={i.price}
              name={i.name}
              id={i.id}
              onClick={goodsClickHandler}
              category={i.category}
              createdAt={i.createdAt}
              updatedAt={i.updatedAt}
            />,
          )
      }),
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
      <BackButton onClick={() => navigator(-1)}>Back</BackButton>
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
