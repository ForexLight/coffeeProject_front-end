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

export { AdminWrapper }
