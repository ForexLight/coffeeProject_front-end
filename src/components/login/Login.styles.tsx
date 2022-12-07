import styled from "styled-components";

export const LoginWrapper = styled.form`
  font-family: "Open Sans", sans-serif;
  background-color: rgba(14, 9, 24, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  color:white;
  height: 100vh;
`
const Input = styled.input`
  border: 0;
  border-bottom: 2px solid white;
  width: 100%;
  padding: 10px;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0);
  color: white;

  &::placeholder, &:placeholder-shown {
    color: white;
  }

  &:focus-visible, &:focus, &:active {
    outline: none;
    border: 0;
    border-bottom: 2px solid #6100a1;
  }
`
export const LoginInput = styled(Input)``
export const PasswordInput = styled(Input)``

export const LoginButton = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #6100a1;
  border: none;
  color: inherit;
`
export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `
export const LoginTitle = styled.h2``
export const LoginSubtitle = styled.span``

export const ErrorMessage = styled.span`
  color: red;
`

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`
