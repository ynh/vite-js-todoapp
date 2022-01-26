<script setup lang="ts">
import AddTask from './AddTask.vue';
import { ref, reactive } from 'vue';
import { useTaskStore } from '../stores/tasks';
const taskStore = useTaskStore();
</script>

<template>
  <AddTask />
  <ul>
    <li v-for="task of taskStore.tasks">
      <label>
        <input type="checkbox" v-model="task.done" />
        {{ task.name }}
      </label>
    </li>
  </ul>
  : {{ taskStore.numberOfTasks }}
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
