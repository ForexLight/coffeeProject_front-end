import styled from 'styled-components'
import { heights } from '../../styled/css.vars'

const GoodsWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  height: ${heights.withoutHeader};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const GoodsHeader = styled.h2`
  margin: 0;
`

const GoodsSection = styled.section`
  width: 100%;
  height: 85%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const GoodsItemWrapper = styled.div`
  height: 30%;
  width: 45%;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  margin: 10px 5px;
  a {
    text-decoration: none;
    color: inherit;
  }
`
const GoodsData = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: inherit;
  h3 {
    padding: 0;
    margin: 0;
  }
  span {
    align-self: flex-end;
    padding-right: 20px;
  }
`

const GoodsImg = styled.div<{ img: any }>`
  width: 100%;
  height: 50%;
  background: url(${(props) => props.img}) no-repeat;
  background-size: 100% 100px;
`

export {
  GoodsWrapper,
  GoodsHeader,
  GoodsSection,
  GoodsItemWrapper,
  GoodsData,
  GoodsImg,
}
