<template>
  <div class="w-full min-h-screen">
    <Header />
    <div m="5">
      <RouterLink class="btn" to="/about">去关于页</RouterLink>
    </div>
  </div>
</template>

<script setup>
import Header from '@component/Header.vue'
</script>
