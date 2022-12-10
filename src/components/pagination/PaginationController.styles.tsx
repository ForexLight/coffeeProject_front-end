import styled from 'styled-components'

export type PageIndicatorType = {
  active: boolean
}

const PaginationContainer = styled.nav`
  position: absolute;
  bottom: 15px;
`
const PagesController = styled.ul`
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PageIndicator = styled.li<PageIndicatorType>`
  display: flex;
  align-items: center;
  min-width: 40px;
  min-height: 40px;
  margin: 0 5px;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? 'red' : props.theme.colors.changeThemeBtn};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
`
export { PageIndicator, PagesController, PaginationContainer }
