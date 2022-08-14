<template>
  <div class="w-full min-h-screen">
    <Header />
    <div m="t-5">
      <div flex="~ col" w="full" justify="center" items="center">
        <div class="min-w-1/3 rounded-2" bg="gray-700" text="white" m="t-5">
          <div border="1" p-4>
            <div p-1 flex="~" justify="between">
              代办事项总数: {{ count }}&nbsp;&nbsp;&nbsp;
              <button class="todo_btn" @click="todoStore.clear">清空所有代办事项</button>
            </div>
            <div p-2 flex="~" justify="between">
              <input w="2/3" h-7 border="none" outline="none" bg="gray-500" text="white" pl-2 type="text"
                v-model="item" />
              <button class="todo_btn" ml-2 @click="todoStore.add">添加</button>
            </div>
            <ol class="list-none">
              <li p-2 border="b" flex="~" justify="between" v-for="i in items" :key="i.id">
                {{ i.text }}
                <button class="todo_btn" @click="todoStore.remove(i.id)">删除</button>
              </li>
            </ol>
          </div>
        </div>
        <div m="t-5">
          <RouterLink class="btn" to="/about">去关于页</RouterLink>
        </div>
        <div w="1/2" text="blue-500" m="t-10">
          <div m="b-4">
            <template v-if="isOK">
              <h2>{{ title }}</h2>
              <p>{{ joke }}</p>
            </template>
            <template v-else>
              加载中...
            </template>
          </div>
          <span @click="getJoke" class="btn">换个笑话</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@component/Header.vue'
import { useTodoStore } from '@store/todo'
const todoStore = useTodoStore()
// 响应式语法糖解构
const { items, item, count } = $(todoStore)

let isOK = $ref(true)
let title = $ref('')
let joke = $ref('')

// 获取笑话
const getJoke = async () => {
  isOK = false
  const res = await fetch('https://api.vvhan.com/api/joke?type=json')
  const response = await res.json()
  title = response.title
  joke = response.joke
  isOK = true
}

getJoke()

</script>

<style scoped>
.todo_btn {
  @apply border-none outline-none px-2 py-1 bg-gray-500 text-white rounded
}
</style>
