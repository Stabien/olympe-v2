import type { WithId } from ".";



export interface User extends WithId {
  email: string
  firstname: string
  lastname: string
  role: UserRole
}

export enum UserRole {
  CUSTOMER = 'customer',
  COACH = 'coach',
  ADMIN = 'admin'
}

export interface UserStore {
  user: User | null,
  token: string | null
}