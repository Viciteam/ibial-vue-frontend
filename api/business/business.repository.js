const API_URL = 'https://businesses.ibial.com/api'
export default ($axios) => ({
  /**
   * discription here
   *
   * @param   {number}  id
   *git
   * @return  {Promise}
   */
  GetBusinessProfileDetails(id) {
    return $axios.$get(`${API_URL}/business/${id}`)
    /*return $axios.$get(`http://127.0.0.1:8000/api/business/${id}`)*/
  }
})
