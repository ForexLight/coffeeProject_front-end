import React from 'react'
import styled from 'styled-components'
import bakery from '../../../assets/bakery.png'
import { pngSelector } from '../../../assets/pngSelector'
import { Link } from 'react-router-dom'

const CategoryItemWrapper = styled.div`
  height: 200px;
  width: 45%;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 5px;
  a {
    text-decoration: none;
    color: inherit;
  }
`
const CategoryData = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: inherit;
`

const CategoryImg = styled.div<{ img: any }>`
  width: 100%;
  height: 100px;
  background: url(${(props) => props.img}) no-repeat;
  background-size: 100% 100px;
`

const CategoryItem = ({ name = 'category' }) => {
  const img = pngSelector(name)
  return (
    <CategoryItemWrapper>
      <Link to="name">
        <CategoryImg img={img} />
        <CategoryData>
          <h3>{name}</h3>
        </CategoryData>
      </Link>
    </CategoryItemWrapper>
  )
}

export default CategoryItem
