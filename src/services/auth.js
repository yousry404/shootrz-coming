import { getCookie, setCookie, deleteCookie } from "../utils/cookie"

export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && getCookie("shootrz-token")
    ? JSON.parse(getCookie("shootrz-token"))
    : null

export const setUser = user => setCookie("shootrz-token", JSON.stringify(user))

export const isLoggedIn = () => {
  const user = getUser()
  return !!user
}

export const logout = callback => {
  deleteCookie("shootrz-token")
  deleteCookie("shootrz-name")
  callback()
}
