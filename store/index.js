import Vuex from 'vuex'
import notifModule from './modules/notifications'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      notifications: notifModule
    }
  })
}

export default createStore
