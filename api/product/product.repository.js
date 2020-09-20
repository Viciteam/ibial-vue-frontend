const API_URL = 'https://products.ibial.com/api'
export default ($axios) => ({
  /**
   * discription here
   *
   * @param   {number}  id
   *
   * @return  {Promise}
   */
  GetProducts() {
    return $axios.$get(`${API_URL}/products`)
  }
})
