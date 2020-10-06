const API_URL = 'https://crmcontacts.ibial.com/api'
//const API_URL = 'http://127.0.0.1:8000/api'
export default ($axios) => ({
  /**
   * discription here
   *
   * @param   {number}  id
   *
   * @return  {Promise}
   */
  AllContacts() {
    return $axios.$get(`${API_URL}/contacts`)
  },

  Contacts(id) {
    return $axios.$get(`${API_URL}/contacts/${id}`)
  }
})
