import React from 'react'
import styled from 'styled-components'
import { heights } from '../../styled/css.vars'
import CategoryItem from './components/CategoryItem'
import { useAppSelector } from '../../hooks/redux_hooks'

const WorkerWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  height: ${heights.withoutHeader};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const WorkerHeader = styled.h2``

const CategorySection = styled.section`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
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
