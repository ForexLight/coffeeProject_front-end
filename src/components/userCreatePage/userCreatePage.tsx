import React, { useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { heights } from '../../styled/css.vars'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux_hooks'
import { useForm } from 'react-hook-form'
import {
  createUser,
  fetchAllUsers,
  removeUser,
} from '../../store/slices/allUsersSlice'

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  height: ${heights.withoutHeader};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const UserForm = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`
const UserFormInput = styled.input`
  border: 0;
  border-bottom: 2px solid white;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
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

const ErrorMessage = styled.span`
  font-size: 14px;
  height: 30px;
  color: red;
`

const UserFormButton = styled.button`
  color: inherit;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.btn};
  border: none;

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`

const UsersMenu = styled.div`
  margin-top: 10px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 60%;
`
const UsersMenuItems = styled.div`
  padding-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin: 0 20px;
    max-width: 50%;
    font-size: 16px;
  }
  button {
    margin: 0 20px;
    display: flex;
    align-self: flex-end;
    justify-self: flex-end;
    color: inherit;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 10px;
    background-color: ${(props) => props.theme.colors.btn};
    border: none;
  }
`

const UserCreatePage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.users.users)

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = async (data: any) => {
    dispatch(createUser(data))
    reset()
  }
  return (
    <Wrapper>
      <UserForm onSubmit={handleSubmit(onSubmit)}>
        <UserFormInput
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
        <UserFormInput
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
            <p>
              {`${errors?.password?.message}` || 'some error in email input'}
            </p>
          )}
        </ErrorMessage>
        <UserFormButton disabled={!isValid}>Register</UserFormButton>
      </UserForm>
      <UsersMenu>
        {users?.map((i) => (
          <UsersMenuItems key={i.id}>
            <span>{i.email}</span>
            <button onClick={() => dispatch(removeUser(i.id))}>delete</button>
          </UsersMenuItems>
        ))}
      </UsersMenu>
    </Wrapper>
  )
}

export default UserCreatePage
