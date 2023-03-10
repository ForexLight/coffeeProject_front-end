import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux_hooks'
import { updateTheme } from '../../../store/slices/themeSlice'
import {
  HeaderBucketBtn,
  HeaderButtonContainer,
  HeaderLogo,
  HeaderThemeSwitcher,
  HeaderWrapper,
} from './Header.style'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const isDarkTheme = useAppSelector((state) => state.theme.dark)
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const dispatcher = useAppDispatch()
  const navigate = useNavigate()
  console.log(isDarkTheme)
  const switchTheme = (): void => {
    dispatcher(updateTheme(!isDarkTheme))
    localStorage.setItem('isDarkTheme', String(!isDarkTheme))
  }

  return (
    <HeaderWrapper>
      <HeaderLogo>LOGO</HeaderLogo>
      <HeaderButtonContainer>
        {isAuth && (
          <HeaderBucketBtn
            onClick={() => navigate('/worker/cart', { replace: true })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                fill="currentColor"
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </HeaderBucketBtn>
        )}
        <HeaderThemeSwitcher onClick={switchTheme} isDarkTheme={isDarkTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M421.6 379.9c-.6641 0-1.35 .0625-2.049 .1953c-11.24 2.143-22.37 3.17-33.32 3.17c-94.81 0-174.1-77.14-174.1-175.5c0-63.19 33.79-121.3 88.73-152.6c8.467-4.812 6.339-17.66-3.279-19.44c-11.2-2.078-29.53-3.746-40.9-3.746C132.3 31.1 32 132.2 32 256c0 123.6 100.1 224 223.8 224c69.04 0 132.1-31.45 173.8-82.93C435.3 389.1 429.1 379.9 421.6 379.9zM255.8 432C158.9 432 80 353 80 256c0-76.32 48.77-141.4 116.7-165.8C175.2 125 163.2 165.6 163.2 207.8c0 99.44 65.13 183.9 154.9 212.8C298.5 428.1 277.4 432 255.8 432z"
            />
          </svg>
        </HeaderThemeSwitcher>
      </HeaderButtonContainer>
    </HeaderWrapper>
  )
}

export default Header
