import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux_hooks'
import { Goods } from '../../store/slices/goodsSlice'
import GoodsItem from './components/GoodsItem'
import styled from 'styled-components'
import { heights } from '../../styled/css.vars'
import { GoodsHeader, GoodsSection } from './goodsPage.style'
import usePagination from '../../hooks/usePagination'
import PaginationController from '../pagination/PaginationController'

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
  const resArr: JSX.Element[] = []
  const res =
    params != undefined &&
    useAppSelector((state) => state.goods)[params as keyof typeof data].map(
      (i) => {
        resArr.push(<GoodsItem key={i.id} {...i} />)
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
    <GoodsPageWrapper>
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
    </GoodsPageWrapper>
  )
}

export default GoodsPage
