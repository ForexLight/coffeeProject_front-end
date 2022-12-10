import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  height: 50px;
`
export const HeaderLogo = styled.div``

export const HeaderThemeSwitcher = styled.button<{ isDarkTheme: boolean }>`
  border: none;
  background-color: ${(props) => props.theme.colors.changeThemeBtn};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  height: 50px;
  width: 50px;
  position: relative;
  svg {
    width: 35px;
    height: 35px;
    transition: all 0.3s linear;
    &:first-child {
      color: yellow;
      position: absolute;
      transform: ${(props) =>
        props.isDarkTheme ? 'translateY(-45px)' : 'translateY(0)'};
    }

    &:last-child {
      color: white;
      padding-left: 4px;
      transform: ${(props) =>
        props.isDarkTheme ? 'translateY(0)' : 'translateY(45px)'};
    }
  }
`

const HeaderBucketBtn = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.changeThemeBtn};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  height: 50px;
  width: 50px;
  color: ${(props) => props.theme.colors.text};
  svg {
    padding-right: 2px;
    width: 35px;
    height: 35px;
  }
`

const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
`
export { HeaderBucketBtn, HeaderButtonContainer }
