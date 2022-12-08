import React, { Dispatch, useState } from 'react'
import {
  AdditionalInfo,
  ErrorMessage,
  LoginButton,
  LoginHeader,
  LoginInput,
  LoginSubtitle,
  LoginTitle,
  LoginWrapper,
  PasswordInput,
} from './Login.styles'
import { useForm } from 'react-hook-form'
import Services, { UserDetails } from '../../API/service'
import jwtDecode from 'jwt-decode'
import { useAppDispatch } from '../../hooks/redux_hooks'
import { updateUser } from '../../store/slices/userSlice'
import { updateUserRole } from '../../store/slices/userRoleSlice'
import { useTheme } from 'styled-components'

const service = new Services()

const Login = (): JSX.Element => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const theme = useTheme()
    const dispatcher = useAppDispatch()

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  })

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: Dispatch<string>,
  ) => {
    setter(e.target.value)
  }
  const onSubmit = async (data: any) => {
    const token = await service.login(data)
      const newData = jwtDecode(token.token)
      console.log( newData)
      if(newData){
          // @ts-ignore
          dispatcher(updateUser({ id: newData.id, email: newData.email, iat: newData.iat, exp: newData.exp}))
          // @ts-ignore
          dispatcher(updateUserRole(newData.roles))
      }
    window.localStorage.setItem('token', `Bearer ${token.token}`)
  }

  return (
    <LoginWrapper onSubmit={handleSubmit(onSubmit)}>
      <LoginHeader>
        <LoginTitle>Log in to Platform </LoginTitle>
        <LoginSubtitle>Enter your account details below</LoginSubtitle>
      </LoginHeader>
      <LoginInput
        {...register('email', {
          required: 'should be field',
          minLength: {
            value: 5,
            message: 'minimum 5 symbols',
          },
          pattern: {
            value: /^[\w-/.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'email typo error',
          },
        })}
        onChange={(e) => onInputChange(e, setLogin)}
        inputMode="email"
        placeholder="Email Address"
      />
      <ErrorMessage>
        {errors?.email && (
          <p>{`${errors?.email?.message}` || 'some error in email input'}</p>
        )}
      </ErrorMessage>
      <PasswordInput
        {...register('password', {
          required: 'should be field',
          minLength: {
            value: 8,
            message: 'at least 8 characters',
          },
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
            message:
              'must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number',
          },
        })}
        onChange={(e) => onInputChange(e, setPassword)}
        placeholder="Password"
      />
      <ErrorMessage>
        {errors?.password && (
          <p>{`${errors?.password?.message}` || 'some error in email input'}</p>
        )}
      </ErrorMessage>
      <LoginButton disabled={!isValid} theme={theme}>Login</LoginButton>
      <AdditionalInfo>
        <span>
          If you dont remember password <br /> please contact to administrator
        </span>
      </AdditionalInfo>
    </LoginWrapper>
  )
}

export default Login
