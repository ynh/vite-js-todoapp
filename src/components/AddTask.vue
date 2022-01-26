<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../stores/tasks';
const taskStore = useTaskStore();
const inputValue = ref('');

function addTask() {
  taskStore.addTask(inputValue.value);
  inputValue.value = '';
}
</script>

<template>
  <div>
    <input type="text" v-model="inputValue" /><button @click="addTask()">
      Add Task
    </button>
  </div>
</template>
