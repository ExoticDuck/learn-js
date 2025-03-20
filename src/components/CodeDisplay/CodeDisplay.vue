<template>
  <div :class="$style.container">
    <div v-if="description">
      <h4>{{ description }}</h4>
    </div>
    <slot></slot>

    <button @click="$emit('execute')" :class="$style.button">Execute</button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  description?: string;
}>();
const emit = defineEmits<{
  execute: [];
}>();
</script>

<style lang="css" module>
.container {
  width: 100%;
  border: 1px solid var(--color-text);
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.button {
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border: 1px solid rgba(78, 78, 78, 0.1);
  border-radius: 0.25rem;
  border-width: 0;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(3, 3, 3, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  list-style: none;
  margin: 0;
  min-height: 3rem;
  overflow: hidden;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  /* tran`sition: all 250ms; */
  transition: box-shadow all 250ms transform 0.1s;
  /* transition: box-shadow 0.15s, transform 0.15s; */
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  will-change: box-shadow, transform;
}

.button:focus,
.button:hover {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.button:hover {
  transform: translateY(-1px);
}

.button:active {
  background-color: #f0f0f1;
  border-color: rgba(0, 0, 0, 0.15);
  /* box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px; */
  box-shadow: #d6d6e7 0 3px 7px inset;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
</style>
