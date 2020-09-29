// const SOCIAL_URL = 'https://social.ibial.com/api'
const SOCIAL_URL = 'https://socialv2.app/api'
export default ($axios) => ({
  /**
   * discription here
   *
   * @param   {number}  id
   *git
   * @return  {Promise}
   */
  getFeedByBusiness(id) {
    return $axios.$get(`${SOCIAL_URL}/get/post`, {
      params: {
        position: 'business',
        position_id: id
      }
    })
    /*return $axios.$get(`http://127.0.0.1:8000/api/business/${id}`)*/
  }
})
