import api from './api'

interface UserDetails {
  email: string
  password: string
}
interface Token {
  token: string
}
interface Role {
  id: number
  description: string
  value: string
  createdAt: string
}
interface UserData {
  id: number
  email: string
  password: string
  banned: boolean
  banReason: null | string
  createdAt: string
  roles: Role[]
}
interface OrderPending {
  orderItems: string
}

interface OrderReceived {
  id: number
  createdAt: string
  orderItems: string
  updatedAt: string
}

interface GoodCreateData {
  name: string
  price: number
  category: string
}
export interface GoodsReceived {
  id: number
  name: string
  price: number
  category: string
  img: string
  updatedAt: string
  createdAt: string
}

interface DeleteOrder {
  id: number
}
export default class Services {
  async getUsers(): Promise<UserData> {
    return api.get('users').then((response) => response.data)
  }
  async login(data: UserDetails): Promise<Token> {
    return api.post('auth/login', data).then((response) => response.data)
  }
  async registration(data: UserDetails): Promise<Token> {
    return await api
      .post('auth/registration', data)
      .then((response) => response.data)
  }

  async postOrder(data: OrderPending): Promise<OrderReceived> {
    return await api.post('orders', data).then((response) => response.data)
  }

  async getOrders(): Promise<OrderReceived[]> {
    return await api.get('orders').then((response) => response.data)
  }

  async addGoods(data: FormData): Promise<GoodsReceived> {
    return await api
      .post('goods', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => response.data)
  }
  async getGoods(): Promise<GoodsReceived[]> {
    return await api.get('goods').then((response) => response.data)
  }
  async deleteGoods(data: any): Promise<any> {
    return await api.delete('goods', data).then((response) => response.data)
  }
}
