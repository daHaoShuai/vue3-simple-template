import { toRaw } from 'vue'
import { createPinia } from 'pinia'

// 把数据保存到本地存储中
const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

// 从本地存储中获取对象
const getStorage = key => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {}
}

// 创建持久化插件,把数据存到本地存储中去,不然一刷新页面数据就丢了
const piniaPlugin = (options) => {
  return (context) => {
    const { store } = context
    const key = `${options.key ?? '__piniaKey__'}-${store.$id}`
    // 获取存储到本地存储中的值
    const data = getStorage(key)
    // 监听值改变的时候就往本地存储中去存
    store.$subscribe(() => {
      setStorage(
        key,
        // toRaw 把代理对象转换成原始对象
        toRaw(store.$state)
      )
    })
    return {
      ...data
    }
  }
}

const store = createPinia()
store.use(piniaPlugin({
  key: 'pinia'
}))

export default store
