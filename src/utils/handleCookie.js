import Cookie from 'js-cookie'

const tokenKey = 'Authorization'

export const getToken = () => Cookie.get(tokenKey)

export const setToken = (token) => Cookie.set(tokenKey, token)

export const removeToken = () => Cookie.remove(tokenKey)
