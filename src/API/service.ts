import api from "./api";

export interface UserDetails {
    email:string
    password: string
}
type TokenType = {
    token: string
}

export default class Services {

    async getUsers():Promise<any> {
        return api.get('users').then(response => response.data)
    }
    async login(data:UserDetails):Promise<TokenType> {
        return api.post('auth/login', data).then((response) => {
            return response.data;
        });
    }
    async registration(data:UserDetails):Promise<TokenType> {
        return await api.post('auth/registration', data).then(response => {
            return response.data
        });
    }
}
