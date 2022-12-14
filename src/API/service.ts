import api from './api'

export interface UserDetails {
  email: string
  password: string
}
export interface Token {
  token: string
}
export interface Role {
  id: number
  description: string
  value: string
  createdAt: string
}
export interface UserData {
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

export interface OrderReceived {
  id: number
  createdAt: string
  orderItems: string
  updatedAt: string
}

export interface GoodCreateData {
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

export interface DeleteGoods {
  id: number
}
export default class Services {
  async getUsers(): Promise<UserData[]> {
    return api.get('users').then((response) => response.data)
  }
  async deleteUsers(id: number): Promise<any> {
    return api.delete(`users/${id}`).then((res) => res.data)
  }
  async login(data: UserDetails): Promise<Token> {
    return api.post('auth/login', data).then((response) => response.data)
  }
  async registration(data: UserDetails): Promise<UserData> {
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

  async getDayOrders(): Promise<OrderReceived[]> {
    return await api.get('orders/day').then((response) => response.data)
  }
  async getWeekOrders(): Promise<OrderReceived[]> {
    return await api.get('orders/week').then((response) => response.data)
  }
  async getMonthOrders(): Promise<OrderReceived[]> {
    return await api.get('orders/month').then((response) => response.data)
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
  async deleteGoods(data: DeleteGoods): Promise<any> {
    return await api
      .delete(`goods/${data.id}`)
      .then((response) => response.data)
  }
}

const service = new Services()

const data = async () => {
  console.log(service.getUsers())
}
data()
