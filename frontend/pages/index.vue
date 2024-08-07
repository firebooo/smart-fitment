<template>
    <ClientOnly>
        <ProjectRender />
    </ClientOnly>
</template>
<script setup lang="ts">
    onMounted(() => {
        console.log('render...');
    })
</script>
<style scoped>
    #render{
        width: 100%;
        height: 100%;
    }
</style>