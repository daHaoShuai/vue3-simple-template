import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = reactive({
    name: 'Da',
    age: 22
  })

  const agePlus = () => {
    userInfo.age += 1
  }

  return {
    userInfo,
    agePlus
  }
},
  {
    // 需要持久化的需要加上这个
    persist: true
  })
