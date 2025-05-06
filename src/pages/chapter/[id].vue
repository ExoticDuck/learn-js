<template>
  <div :class="$style.container">
    <TasksSelect />
    <CodeRunner />
  </div>
</template>

<script lang="ts" setup>
import Skeleton from '@/components/Skeleton.vue'
import {
  AsyncComponentLoader,
  Component,
  ComputedOptions,
  defineAsyncComponent,
  MethodOptions
} from 'vue'
const TasksSelect = defineAsyncComponent(() => import('@/components/TasksSelect.vue'))
function delayedLoader() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('@/components/CodeRunner.vue'))
    }, 500)
  })
}
const CodeRunner = defineAsyncComponent({
  loader: delayedLoader as AsyncComponentLoader<
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    Component<any, any, any, ComputedOptions, MethodOptions, {}, any>
  >,
  loadingComponent: Skeleton,
  delay: 0
})
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
