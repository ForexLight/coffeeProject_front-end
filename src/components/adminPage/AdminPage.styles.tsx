import styled from 'styled-components'
import { heights } from '../../styled/css.vars'

const AdminWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  height: ${heights.withoutHeader};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const CreateUserBtn = styled.button`
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
  height: 100px;
  width: 95%;
  border-radius: ${(props) => props.theme.borderRadius};
  color: inherit;
  background-color: ${(props) => props.theme.colors.btn};
  border: none;
`
const CreateGoodsBtn = styled.button`
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
  height: 100px;
  width: 95%;
  border-radius: ${(props) => props.theme.borderRadius};
  color: inherit;
  background-color: ${(props) => props.theme.colors.btn};
  border: none;
`
export { AdminWrapper, CreateUserBtn, CreateGoodsBtn }
