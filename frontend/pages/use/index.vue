<template>
    <div ref="el" :style="style" style="position: fixed">
        Drag me! I am at {{ x }}, {{ y }}
    </div>
    <el-button @click="handleRequest">按钮</el-button>
    <span v-tippy="'v-tippy'">v-tippy</span>
</template>
<script setup lang="ts">
    import { useDraggable } from '@vueuse/core'
    import { groupBy } from 'lodash-es';
    import { service } from '~/composables/request/useAxiosRequest';

    const el = ref<HTMLElement | null>(null)

    // `style` will be a helper computed for `left: ?px; top: ?px;`
    const { x, y, style } = useDraggable(el, {
        initialValue: { x: 40, y: 40 },
    })

    const handleRequest = () => {
        ElMessage({
            type: 'success',
            message: '弹窗测试'
        });
        service.post('/login', { userName: 'admin', password: '123456' });
    }

    onMounted(() => {
        console.log('floor:', groupBy([6.1, 4.2, 6.3], Math.floor));
        console.log('env:', process.env);
    })
</script>
