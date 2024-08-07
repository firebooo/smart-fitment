<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <p id="content">{{ msg }}</p>
    <span>{{ count }}</span>
    <button @click="handleClick">+</button>
    <el-button type="primary" @click="handleClick">添加</el-button> -->
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
  const msg = ref<string>('hello nuxt...');
  const count = ref<number>(0);
  const handleClick = () => {
    count.value++;
  }
</script>
<style scoped>
  #content{
    color:red;
  }
</style>
