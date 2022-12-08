const userData = [
  {
    email: '',
    id: 0,
    iat: 0,
    exp: 0,
  },
]
const roles = [
  {
    id: 0,
    value: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    UserRoles: {
      id: 0,
      roleId: 0,
      userId: 0,
    },
  },
]
const categories = [
  {
    name: 'dessert',
    id: 0,
  },
  {
    name: 'bakery',
    id: 1,
  },
  {
    name: 'drinks',
    id: 2,
  },
  {
    name: 'coffee',
    id: 3,
  },
]

const initialGoods = {
  bakery: [
    {
      id: 0,
      name: '',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
  ],
  dessert: [
    {
      id: 0,
      name: 'simple',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
    {
      id: 1,
      name: 'simple',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
    {
      id: 2,
      name: 'simple',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
    {
      id: 3,
      name: 'simple',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
    {
      id: 4,
      name: 'simple',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
    {
      id: 5,
      name: 'simple',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
    {
      id: 6,
      name: 'simple',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
    {
      id: 7,
      name: 'simple',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
    {
      id: 8,
      name: 'simple',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
  ],
  drinks: [
    {
      id: 0,
      name: '',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
  ],
  coffee: [
    {
      id: 0,
      name: '',
      price: 5,
      img: 'https://cdn-icons-png.flaticon.com/512/1069/1069102.png',
    },
  ],
}

export { categories, roles, userData, initialGoods }
