<template>
    <el-button @click="handleMitt">change</el-button>
</template>
<script setup lang="ts">
    import { mittKeys } from '~/lib/core/composables/mitt';

    const { $mitt } = useNuxtApp();
    const text = ref<string>('bbb');
    const handleMitt = () => {
        const txt = text.value;
        console.log('txt:', txt);
        $mitt.emit(mittKeys.TEST_KEY, txt);
    }
</script>