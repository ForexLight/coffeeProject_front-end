import styled from 'styled-components'
import { heights } from '../../styled/css.vars'

const WorkerWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  height: ${heights.withoutHeader};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const GoodsHeader = styled.h2``

const GoodsSection = styled.section`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const GoodsItemWrapper = styled.div`
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
const GoodsData = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: inherit;
`

const GoodsImg = styled.div<{ img: any }>`
  width: 100%;
  height: 100px;
  background: url(${(props) => props.img}) no-repeat;
  background-size: 100% 100px;
`

export {
  WorkerWrapper,
  GoodsHeader,
  GoodsSection,
  GoodsItemWrapper,
  GoodsData,
  GoodsImg,
}
