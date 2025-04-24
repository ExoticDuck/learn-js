<template>
  <div :class="$style.container">
    <TasksSelect />
    <CodeRunner />
  </div>
</template>

<script lang="ts" setup>
import CodeRunner from '@/components/CodeRunner.vue'
import TasksSelect from '@/components/TasksSelect.vue'
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
