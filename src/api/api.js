import axios from 'http'

export default {
  /**
   * 获取所有城市列表
   */
  getAllCityList: 'basic/city/list',
  /**
   * 更新城市状态
   */
  updateCity: 'basic/city/update'
}

/**
 * get 请求
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * post 请求
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
