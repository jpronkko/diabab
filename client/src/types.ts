export type LoginInput = {
  username: string
  password: string
}

export interface LoginData {
  username: string
  email: string
  token: string
}

export type StoredLogin = {
  username: string
  email: string
}

export interface RegisterInput extends LoginInput {
  email: string
  confirmPassword: string
}

export interface BloodData {
  glucose: number
  carbs: number
  carbsRatio: number
  sensitivity: number
  timestamp: Date
}

export interface ApiFetchHook<T> {
  fetchData: (useAuth: boolean) => Promise<T | null>
  isLoading: boolean
  error: Error | null
}

export interface ApiPostHook<T, R> {
  postData: (data: R, useAuth: boolean) => Promise<T | null>
  isPosting: boolean
  error: Error | null
}
