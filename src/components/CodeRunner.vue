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
      <pre :class="{ [$style.error]: output.isError }">{{ output.message }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import * as ts from 'typescript'
import { useTasksStore } from '@/store/tasks'

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

const runCode = () => {
  try {
    const consoleMessages: string[] = []
    const customConsole = {
      log: (...args: string[]) => consoleMessages.push(args.join(' '))
    }

    const jsCode = ts.transpile(code.value)

    new Function('console', jsCode)(customConsole)

    output.value = {
      message: consoleMessages.join('\n') || 'Код выполнен без вывода.',
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

<style module>
.code_runner {
  padding: 20px;
  background-color: #2e2e2e;
  color: white;
  border-radius: 4px;
  width: 100%;
}

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
}

.run_btn:hover {
  background-color: #0056b3;
}

.output {
  margin-top: 20px;
  padding: 10px;
  background-color: #333;
  border-radius: 4px;
}

pre {
  color: #32cd32;
}

.error {
  color: rgb(252, 42, 42);
}

@media (max-width: 1023px) {
  .code_runner {
  }
  .editor {
  }
}
</style>
