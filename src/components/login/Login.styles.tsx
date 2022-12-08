import styled, { DefaultTheme } from 'styled-components'
import { heights } from '../../styled/css.vars'
export const LoginWrapper = styled.form`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: ${heights.withoutHeader};
`
const Input = styled.input`
  border: 0;
  border-bottom: 2px solid white;
  width: 100%;
  padding: 10px;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0);
  color: white;

  &::placeholder,
  &:placeholder-shown {
    color: white;
  }

  &:focus-visible,
  &:focus,
  &:active {
    outline: none;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme.colors.btn};
  }
`
export const LoginInput = styled(Input)``
export const PasswordInput = styled(Input)``

export const LoginButton = styled.button`
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.btn};
  border: none;
  color: inherit;

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`
export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LoginTitle = styled.h2``
export const LoginSubtitle = styled.span``

export const ErrorMessage = styled.span`
  font-size: 14px;
  height: 30px;
  color: red;
`

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`
