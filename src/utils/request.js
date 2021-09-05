import axios from 'axios'
import { getToken } from '@/utils/handleCookie'
import { Message } from 'ant-design-vue'
const service = axios.create({
  baseURL: '/xativa/v1/client',
  timeout: 100000000000000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 后端要求 请求头中要写到 token
    config.headers.Authorization = getToken() || ''
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    }
    return Promise.reject(response)
  },
  error => {
    Message.error('后端服务错误 请联系管理员!')
    // return Promise.reject(error)
    return error
  }
)
export default service
