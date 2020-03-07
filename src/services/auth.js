export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("shootrzToken")
    ? JSON.parse(window.localStorage.getItem("shootrzToken"))
    : null

export const setUser = user =>
  window.localStorage.setItem("shootrzToken", JSON.stringify(user))



export const isLoggedIn = () => {
  const user = getUser()
  return !!user
}

export const logout = callback => {
  window.localStorage.removeItem("shootrzToken")
  window.localStorage.removeItem("shootrzName")
  callback()
}