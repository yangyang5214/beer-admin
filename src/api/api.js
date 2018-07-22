import axios from 'http'

export default {
  /**
   * 获取所有城市列表
   */
  getAllCityList: 'basic/city/list',
  /**
   * 更新城市状态
   */
  updateCity: 'basic/city/update',
  /**
   * 获取图片列表
   */
  getImageList: 'basic/image/list',

  /**
   * 获取图片封面列表
   */
  getImageCoverList: 'basic/image/cover/list',

  /**
   * 保存图片封面
   */
  saveImageCover: 'basic/image/cover/save',


  /**
   * 更新图片封面
   */
  updateImageCover: 'basic/image/cover/update',

  /**
   * 删除图片
   */
  deleteImage: 'basic/image/delete',

  /**
   * 删除图片封面
   */
  deleteImageCover: 'basic/image/cover/delete',
  /**
   * blog  list
   */
  getBlogList: 'basic/blog/list',
  /**
   * update blog
   */
  updateBlog: 'basic/blog/update',
  /**
   * delete blog
   */
  deleteBlog: 'basic/blog/delete',
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
