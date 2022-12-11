import styled from 'styled-components'

const BackButton = styled.button`
  position: absolute;
  left: 5px;
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  background-color: ${(props) => props.theme.colors.changeThemeBtn};
  padding: 5px 10px;
  color: inherit;
`

const Header = styled.h2``

export { BackButton, Header }
