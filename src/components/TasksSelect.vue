<template>
  <div :class="$style.select_container">
    <h1>Chapter {{ tasks.chapterId }}</h1>
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
        {{ `Задача ${id}` }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/store/tasks'
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const tasks = useTasksStore()
const route = useRoute()
const { currentRoute, replace } = useRouter()

type ParamsType = { id: number }
type QueryType = { task: string }
const chapterId = computed(() => {
  const { id } = route.params as ParamsType
  tasks.setChapterId(id.toString())
  return id.toString()
})

const tasksIds = computed(() => tasks.getTasksIdsFromChapter(chapterId.value))

const selectedTaskId = computed({
  get() {
    const { task } = route.query as QueryType
    return String(tasks.taskId ?? task)
  },
  set(newValue: string) {
    updateQueryState('task', newValue)
    tasks.setTaskId(newValue)
  }
})

const updateQueryState = (parameter: string, value: string) => {
  replace({
    query: {
      ...currentRoute.value.query,
      [parameter]: value
    }
  })
}

onMounted(() => {
  const { task } = route.query as QueryType
  selectedTaskId.value = task
})
</script>

<style module lang="scss">
.select_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  .select {
    background-color: inherit;
    padding: 6px 8px;
    border-radius: 4px;
    color: var(--white);
    min-width: 250px;

    &::-webkit-scrollbar {
      width: 4px;
      height: 14px;
    }

    &::-webkit-scrollbar-track {
      border: rgb(180, 180, 180);
      background-color: var(--color-background);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-text);
      border: 1px solid rgb(193, 193, 193);
      border-radius: 2px;
    }

    &:focus {
      outline: 1px solid var(--color-text);
    }

    .option {
      background: var(--color-background);
      height: 30px;
      padding: 20px 10px;
      transition: 0.4s;
    }
  }
}
</style>
