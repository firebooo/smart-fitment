<template>
    <ClientOnly>
        <el-dialog
            v-model="visible"
            title="Tips"
            width="500"
            ref="dialog"
        >
            <span>This is a message</span>
            <template #footer>
            <div class="dialog-footer">
                <el-button @click="visible = false">Cancel</el-button>
                <el-button type="primary" @click="visible = false">
                Confirm
                </el-button>
            </div>
            </template>
        </el-dialog>
    </ClientOnly>
</template>
<script setup lang="ts">
    const visible = defineModel<boolean>('visible');
    
    const handleLog = () => {
        console.log('log...');
    }

    defineExpose({
        handleLog
    })
</script>