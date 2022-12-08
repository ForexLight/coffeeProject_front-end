import React from 'react'
import { pngSelector } from '../../../assets/pngSelector'
import { Link } from 'react-router-dom'
import {
  CategoryData,
  CategoryImg,
  CategoryItemWrapper,
} from '../WorkerPage.style'

const CategoryItem = ({ name = 'category' }) => {
  const img = pngSelector(name)
  return (
    <CategoryItemWrapper>
      <Link to={name}>
        <CategoryImg img={img} />
        <CategoryData>
          <h3>{name}</h3>
        </CategoryData>
      </Link>
    </CategoryItemWrapper>
  )
}

export default CategoryItem
