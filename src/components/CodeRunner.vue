<template>
  <div :class="$style.code_runner">
    <VueMonacoEditor
      :value="code"
      :defaultValue="initialCode"
      height="300px"
      language="typescript"
      theme="vs-dark"
      :options="editorOptions"
      @change="handleEditorChange"
    />

    <button @click="runCode" :class="$style.run_btn">Запустить код</button>

    <div :class="$style.output">
      <h3>Вывод:</h3>
      <pre>{{ output }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { VueMonacoEditor } from "@guolao/vue-monaco-editor";
import * as ts from "typescript";

const props = defineProps<{
  initialCode: string;
}>();

const code = ref(``);
const output = ref("");

const editorOptions = {
  selectOnLineNumbers: true,
  scrollBeyondLastLine: false,
};

const runCode = () => {
  try {
    const consoleMessages: string[] = [];
    const customConsole = {
      log: (...args: string[]) => consoleMessages.push(args.join(" ")),
    };

    const jsCode = ts.transpile(code.value);

    //todo: выяснить как работаетяы
    new Function("console", jsCode)(customConsole);
    //todo: fix bug
    output.value = consoleMessages.join("\n") || "Код выполнен без вывода.";
  } catch (error: any) {
    //todo: change output styles
    output.value = `Ошибка: ${error.message}`;
  }
};

const handleEditorChange = (newCode: string) => {
  code.value = newCode;
};

watch(() => props.initialCode, () => {
  code.value = initialCode.value;
});
</script>

<style module>
.code_runner {
  padding: 20px;
  background-color: #2e2e2e;
  color: white;
  border-radius: 8px;
  width: calc(100vw / 2);
  /* max-width: 800px; */
  margin: auto;
}

.run_btn {
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.run_btn:hover {
  background-color: #0056b3;
}

.output {
  margin-top: 20px;
  padding: 10px;
  background-color: #333;
  border-radius: 5px;
  min-height: 50px;
}

pre {
  color: #32cd32;
}
</style>
