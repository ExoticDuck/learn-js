<template>
  <div :class="$style.code_runner">
    <VueMonacoEditor
      :value="code"
      :defaultValue="selectedTask"
      :class="$style.editor"
      height="300px"
      language="typescript"
      theme="vs-dark"
      :options="editorOptions"
      @change="handleEditorChange"
    />

    <button
      type="button"
      :class="$style.run_btn"
      @click="runCode"
    >
      Запустить код
    </button>

    <div :class="$style.output">
      <h3>Вывод:</h3>
      <div
        :class="{ [$style.error]: output.isError, [$style.message]: !output.isError }"
        v-html="output.message"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref, watch } from 'vue'
import * as ts from 'typescript'
import { useTasksStore } from '@/store/tasks'
import { stringifyEmptyVars } from '@/utils/utils'
const VueMonacoEditor = defineAsyncComponent(() => import('@guolao/vue-monaco-editor'))
const tasks = useTasksStore()

const selectedTask = computed(() => {
  return tasks.getTask(tasks.chapterId, tasks.taskId)?.task || ''
})

const code = ref(selectedTask.value)
const output = ref({ isError: false, message: '' })

const editorOptions = {
  selectOnLineNumbers: true,
  scrollBeyondLastLine: false
}

const runCode = async () => {
  try {
    const consoleMessages: string[] = []
    const customConsole = {
      log: (...args: string[]) => {
        const res = args.map(el => stringifyEmptyVars(el))
        consoleMessages.push(res.join(' '))
      }
    }

    const jsCode = ts.transpile(code.value)

    await new Function('console', jsCode)(customConsole)

    output.value = {
      message: consoleMessages.join('<br>') || 'Код выполнен без вывода.',
      isError: false
    }
  } catch (error: unknown) {
    output.value = { message: `Ошибка: ${(error as { message: string }).message}`, isError: true }
  }
}

const handleEditorChange = (newCode: string) => {
  code.value = newCode
}

watch(
  () => selectedTask.value,
  () => {
    code.value = selectedTask.value
  }
)
</script>

<style module lang="scss">
.code_runner {
  padding: 20px;
  background-color: var(--grey);
  color: white;
  border-radius: 4px;
  width: 100%;

  .editor {
    min-height: 50vh;
  }

  .run_btn {
    margin-top: 10px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  .output {
    margin-top: 20px;
    padding: 10px;
    background-color: #333;
    border-radius: 4px;

    .message {
      color: #32cd32;
    }

    .error {
      color: rgb(252, 42, 42);
    }
  }
}
</style>
