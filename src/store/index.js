import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(createPersistedState(
  {
    // 持久化到会话存储
    storage: sessionStorage
  }
))

export default store
