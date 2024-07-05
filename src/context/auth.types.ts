export type UserDataType = {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string
    age: number,
    phone: number,
    image: string
}

export type UserList = {
    users: UserDataType[]
}

export type AuthType = {
    user: UserDataType | null;
    isAuthenticated: boolean
    signIn: (userData: any) => void;
    signOut: () => void;
} 