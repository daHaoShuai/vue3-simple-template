<template>
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <!-- 在多个组件间动态切换时缓存被移除的组件实例 -->
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </transition>
  </router-view>
</template>
