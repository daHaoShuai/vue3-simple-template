<template>
  <div class="w-full min-h-screen flex justify-center items-center flex-col">
    <h1 class="text-teal-500">关于</h1>
    <p m="t-4">我是 {{ name }}</p>
    <p m="t-4">我今年 {{ age }} 了</p>
    <p m="t-4" border text="orange-500" p="x-4 y-1" cursor="pointer" select="none" @click="add">让我的年龄增加</p>
    <div m="t-4">
      <RouterLink class="btn" to="/">回首页</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/modules/user'
import { storeToRefs } from 'pinia'

const { name, age } = storeToRefs(useUserStore())

const add = _ => {
  age.value++
}
</script>
