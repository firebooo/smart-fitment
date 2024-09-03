<template>
    <div ref="el" :style="style" style="position: fixed">
        Drag me! I am at {{ x }}, {{ y }}
    </div>
    <el-button @click="handleRequest">按钮</el-button>
    <span v-tippy="'v-tippy'">v-tippy</span>
    <div ref="chartEl" style="width: 400px;height: 400px;"></div>
    <el-button @click="handleDialog">打开弹窗</el-button>
    <DialogBaseDialog v-model:visible="visible" ref="baseDialog" />
</template>
<script setup lang="ts">
    import { useDraggable } from '@vueuse/core'
    import * as echarts from 'echarts';
    import { groupBy } from 'lodash-es';
    import { service } from '~/composables/request/useAxiosRequest';

    const visible = ref<boolean>(false);
    const el = ref<HTMLElement | null>(null)
    const chartEl = ref<HTMLCanvasElement | null>(null);
    const baseDialog = ref();

    // `style` will be a helper computed for `left: ?px; top: ?px;`
    const { x, y, style } = useDraggable(el, {
        initialValue: { x: 400, y: 40 },
    })

    const handleRequest = () => {
        ElMessage({
            type: 'success',
            message: '弹窗测试'
        });
        service.post('/login', { userName: 'admin', password: '123456' });
        service.get('/api/status');
    }

    const handleDialog = () => {
        visible.value = true;
        baseDialog.value.handleLog();
    }


    onMounted(() => {
        console.log('floor:', groupBy([6.1, 4.2, 6.3], Math.floor));
        console.log('env:', process.env);
        const myChart = echarts.init(chartEl.value);
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
                }
            ]
        });
    })
</script>
