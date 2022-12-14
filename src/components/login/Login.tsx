import React from 'react'
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
import Services from '../../API/service'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux_hooks'
import { updateUser } from '../../store/slices/userSlice'
import { updateUserRole } from '../../store/slices/userRoleSlice'
import { useTheme } from 'styled-components'
import { Role, UserState } from '../../store/slices/types/types'
import { updateStatus } from '../../store/slices/authSlice'

const service = new Services()

const Login = (): JSX.Element => {
  const navigate = useNavigate()
  const theme = useTheme()
  const dispatcher = useAppDispatch()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = async (data: any) => {
    const token = await service.login(data)
    const newData = jwtDecode(token.token) as UserState & {
      roles: Role[]
    }
    console.log(newData)
    if (newData) {
      dispatcher(
        updateUser({
          id: newData.id,
          email: newData.email,
          iat: newData.iat,
          exp: newData.exp,
        }),
      )
      dispatcher(updateUserRole(newData.roles))
    }

    dispatcher(updateStatus(true))

    window.localStorage.setItem('token', `Bearer ${token.token}`)

    navigate('/', { replace: true })
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
        placeholder="Password"
      />
      <ErrorMessage>
        {errors?.password && (
          <p>{`${errors?.password?.message}` || 'some error in email input'}</p>
        )}
      </ErrorMessage>
      <LoginButton disabled={!isValid} theme={theme}>
        Login
      </LoginButton>
      <AdditionalInfo>
        <span>
          If you dont remember password <br /> please contact to administrator
        </span>
      </AdditionalInfo>
    </LoginWrapper>
  )
}

export default Login
