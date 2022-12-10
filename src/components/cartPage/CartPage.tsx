import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        back
      </button>
      CartPage
    </div>
  )
}

export default CartPage
