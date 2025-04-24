<template>
  <div :class="$style.container">
    <TasksSelect />
    <CodeRunner />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const TasksSelect = defineAsyncComponent(() => import('@/components/TasksSelect.vue'))
const CodeRunner = defineAsyncComponent(() => import('@/components/CodeRunner.vue'))
</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  gap: 20px;
}
</style>
