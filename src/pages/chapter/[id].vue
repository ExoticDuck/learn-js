<template>
  <div :class="$style.container">
    <div :class="$style.select_container">
      <h1>Chapter {{ chapterId }}</h1>
      <select
        v-model="selectedTaskId"
        :class="$style.select"
      >
        <option
          v-for="(id, i) in tasksIds"
          :key="i"
          :value="id"
          :class="$style.option"
        >
          {{ `Задача ${id.toString()}` }}
        </option>
      </select>
    </div>

    <CodeRunner :initialCode="selectedTask" />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import CodeRunner from '@/components/CodeRunner.vue'
import { useRoute, useRouter } from 'vue-router'
import { useTasksStore } from '@/store/tasks'
import { storeToRefs } from 'pinia'

const tasks = useTasksStore()
const { getTasksIdsFromChapter, getTask } = storeToRefs(tasks)
const route = useRoute()
const { currentRoute, push } = useRouter()

const chapterId = ref(1)
const selectedTaskId = ref(1)
const tasksIds = ref<number[]>([])

const selectedTask = computed(() => {
  return getTask.value(chapterId.value, selectedTaskId.value)?.task || ''
})

const updateQueryState = (parameter: string, value: string) => {
  push({
    query: {
      ...currentRoute.value.query,
      [parameter]: value
    }
  })
}

type ParamsType = { id: number }

const updateCurrentChapterAndTask = () => {
  const { id } = route.params as ParamsType
  chapterId.value = id
  tasksIds.value = getTasksIdsFromChapter.value(id)
  if (route.query.task) {
    selectedTaskId.value = Number(route.query.task)
  } else {
    selectedTaskId.value = 1
  }
}

watch(selectedTaskId, () => {
  updateQueryState('task', selectedTaskId.value.toString())
})

watch(
  () => route.params,
  () => {
    updateCurrentChapterAndTask()
  }
)

onMounted(() => {
  updateCurrentChapterAndTask()
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
.select_container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.select {
  background-color: inherit;
  padding: 5px 10px;
  color: var(--white);
}

.option {
  background: var(--color-background);
  padding: 10px;
  transition: 0.4s;
}
</style>
