<template>
  <div class="w-full min-h-screen flex justify-center items-center flex-col">
    <h1 class="text-blue-500">关于</h1>
    <p m="t-4" text="2xl">我是 {{ userInfo.name }}</p>
    <p m="t-4" text="2xl">我今年 {{ userInfo.age }} 了</p>
    <p m="t-4" class="btn" @click="userStore.agePlus">
      让我的年龄增加
    </p>
    <div m="t-4">
      <RouterLink class="btn" to="/">回首页</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@store/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
</script>
