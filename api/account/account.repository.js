const baseURL = 'https://accounts.ibial.com/api/v1'

export default ($axios) => ({
  register(params) {
    let query = buildParams(params)
    return $axios.$post(
      `${baseURL}/register${query.length > 0 ? '?' + query : ''}`
    )
  }
})

function buildParams(args) {
  let bld = []
  let registerparams = ''
  if (args != undefined) {
    for (const [key, value] of Object.entries(args)) {
      bld.push(`${key}=${value}`)
    }
    registerparams = bld.join('&')
  }
  return registerparams
}
