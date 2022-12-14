import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { heights } from '../../styled/css.vars'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux_hooks'
import { createUser, fetchAllUsers } from '../../store/slices/allUsersSlice'
import { useForm } from 'react-hook-form'
import {
  addGoods,
  deleteGoods,
  fetchGoods,
} from '../../store/slices/goodsSlice'
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

const GoodsMenu = styled.div`
  margin-top: 10px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 60%;
`
const GoodsMenuItems = styled.div`
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
  img {
    height: 75px;
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
const GoodsCreatePage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const goods = useAppSelector((state) => state.goods.goods)

  useEffect(() => {
    dispatch(fetchGoods())
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
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('price', data.price)
    formData.append('category', data.category)
    formData.append('img', data.file[0])
    dispatch(addGoods(formData))
  }
  return (
    <Wrapper>
      <UserForm onSubmit={handleSubmit(onSubmit)}>
        <UserFormInput
          {...register('name', {
            required: 'should be field',
          })}
          placeholder="name of product"
        />
        <ErrorMessage>
          {errors?.email && (
            <p>{`${errors?.email?.message}` || 'some error in email input'}</p>
          )}
        </ErrorMessage>
        <UserFormInput
          {...register('price', {
            required: 'should be field',
          })}
          inputMode="numeric"
          placeholder="price of product"
        />
        <ErrorMessage>
          {errors?.price && (
            <p>{`${errors?.price?.message}` || 'some error in price input'}</p>
          )}
        </ErrorMessage>
        <UserFormInput
          {...register('category', {
            required: 'should be field',
          })}
          placeholder="category"
        />
        <ErrorMessage>
          {errors?.price && (
            <p>
              {`${errors?.category?.message}` || 'some error in price input'}
            </p>
          )}
        </ErrorMessage>
        <UserFormInput
          type="file"
          {...register('file', {
            required: 'should be field',
          })}
        />
        <ErrorMessage>
          {errors?.password && (
            <p>{`${errors?.file?.message}` || 'some error in file input'}</p>
          )}
        </ErrorMessage>
        <UserFormButton disabled={!isValid}>Register</UserFormButton>
      </UserForm>
      <GoodsMenu>
        {goods.map((i) => (
          <GoodsMenuItems key={i.id}>
            <img src={`http://localhost:7000/${i.img}`} alt="goods img" />
            <div>
              <span>name = {i.name}</span> <span>price - {i.price} ₴</span>
            </div>
            <button onClick={() => dispatch(deleteGoods(i.id))}>delete</button>
          </GoodsMenuItems>
        ))}
      </GoodsMenu>
    </Wrapper>
  )
}

export default GoodsCreatePage
