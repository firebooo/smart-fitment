<template>
    <p>{{ text }}</p>
</template>
<script setup lang="ts">
    import { mittKeys } from '~/lib/core/composables/mitt';

    const { $mitt } = useNuxtApp();
    const text = ref<string>('aaa');

    onMounted(() => {
        $mitt.on(mittKeys.TEST_KEY, (txt: string) => {
            text.value = txt as string;
        })
    })

</script>