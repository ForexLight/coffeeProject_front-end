import styled from 'styled-components'
import { BackButton } from '../../styled/sharedComponents'
import { heights } from '../../styled/css.vars'
type IsActive = {
  active: boolean
}
const CartWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  height: ${heights.withoutHeader};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const CartHeader = styled.h2`
  margin: 0;
`

const CartSection = styled.section`
  padding-top: 5px;
  width: 100%;
  max-height: 85%;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`

const CartItemWrapper = styled.div`
  height: 70px;
  width: 100%;
  border-radius: ${(props) => ` ${props.theme.borderRadius} `};
  background-color: #fff;
  display: flex;
  margin: 5px;
  a {
    text-decoration: none;
    color: inherit;
  }
`
const CartData = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  h3 {
    padding: 0;
    margin: 0;
  }
  span {
    align-self: flex-end;
    padding-right: 20px;
  }
`

const CartImg = styled.div<{ img: any }>`
  width: 25%;
  height: 100%;
  background: url(${(props) => props.img}) no-repeat;
  background-size: 100% 100%;
`
const RemoveButton = styled.button`
  border: none;
  background-color: indianred;
  border-radius: ${(props) =>
    `0 ${props.theme.borderRadius}  ${props.theme.borderRadius} 0`};
  color: inherit;
`

const SummaryInfo = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
`
const OrderButton = styled.button<IsActive>`
  position: absolute;
  bottom: 10px;
  border: none;
  color: inherit;
  background-color: ${(props) =>
    props.active ? props.theme.colors.btn : props.theme.colors.changeThemeBtn};
  border-radius: ${(props) => ` ${props.theme.borderRadius} `};
  height: 40px;
  width: 80%;
`
export {
  CartHeader,
  CartWrapper,
  BackButton,
  CartItemWrapper,
  CartSection,
  CartImg,
  CartData,
  RemoveButton,
  SummaryInfo,
  OrderButton,
}
