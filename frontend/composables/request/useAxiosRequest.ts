import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:3000'   //配置axios请求的地址
})
  //post请求的请求头
service.defaults.headers.post['Content-Type'] = 'application/json';

export { service }