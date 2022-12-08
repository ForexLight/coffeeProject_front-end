import React from 'react'
import CategoryItem from './components/CategoryItem'
import { useAppSelector } from '../../hooks/redux_hooks'
import {
  CategorySection,
  WorkerHeader,
  WorkerWrapper,
} from './WorkerPage.style'

const WorkerPage = () => {
  const categories = useAppSelector((state) => state.category)

  return (
    <WorkerWrapper>
      <WorkerHeader>Choose category</WorkerHeader>
      <CategorySection>
        {categories.map((i) => (
          <CategoryItem name={i.name} key={i.id} />
        ))}
      </CategorySection>
    </WorkerWrapper>
  )
}

export default WorkerPage
