const SOCIAL_URL = 'https://social.ibial.com/api'

export default ($axios) => ({
  /**
   * discription here
   *
   * @param   {number}  id
   *git
   * @return  {Promise}
   */
  GetFeedByBusiness(id) {
    return $axios.$get(`${SOCIAL_URL}/get/post`, {
      params: {
        position: 'business',
        position_id: id
      }
    })
    /*return $axios.$get(`http://127.0.0.1:8000/api/business/${id}`)*/
  },
  /**
   * Create new post
   *
   * @return  {Promise}
   */
  CreatePost(payload) {
    return $axios.$post(`${SOCIAL_URL}/set/post`, payload)
  },
  /**
   * Delete post by ID
   *
   * @param   {number}  id
   *
   * @return  {Promise}
   */
  DeletePostById(id) {
    return $axios.$delete(`${SOCIAL_URL}/delete/post/${id}`)
  }
})
