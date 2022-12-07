export type Role = {
    id: number;
    value: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    UserRoles: {
        id: number,
        roleId: number,
        userId: number
    }
}
export type UserState = {
    email: string;
    id: number;
    iat: number;
    exp: number;
}
