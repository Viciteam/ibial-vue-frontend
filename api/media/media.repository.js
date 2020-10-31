const UPLOAD_URL = 'https://s3storage.ibial.com/api/'

export default ($axios) => ({
  /**
   * discription here
   *
   * @param   {String}  uploadType
   * @param   {Object}  payload
   *
   * @return  {Promise}
   */
  UploadFiles(uploadType, payload) {
    const formData = new FormData()
    formData.append('file', payload.file)
    formData.append('user_id', payload.user_id)

    return $axios.$post(`${UPLOAD_URL}${uploadType}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
})
