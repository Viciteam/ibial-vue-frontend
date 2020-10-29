// const API_URL = 'https://ts.ibial.com/api'
const API_URL = 'https://ibial-backend-teamspace.app/api'
export default ($axios) => ({
  /**
   * discription here
   *
   * @param   {number}  id
   *
   * @return  {Promise}
   */

  invitePeopleByID(user_id, team_id, project_id) {
    return $axios.$post(`${API_URL}/teams/members/add`, {
      user_id: user_id,
      team_id: team_id,
      project_id: project_id
    })
  },
  pullMembers(team_id) {
    return $axios.$get(`${API_URL}/teams/members/${team_id}`)
  },
  removeMember(member_id) {
    return $axios.$post(`${API_URL}/teams/members/remove/${member_id}`)
  }
})
