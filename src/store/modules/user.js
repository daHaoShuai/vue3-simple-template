import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'Da',
      age: 22
    }
  },
  getters: {

  },
  actions: {
    
  }
})
