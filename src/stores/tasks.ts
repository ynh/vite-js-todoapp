import { defineStore, acceptHMRUpdate } from 'pinia';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      { name: 'learn vue', done: false },
      { name: 'learn vue2', done: false },
      { name: 'learn vue3', done: true },
    ],
  }),
  getters: {
    numberOfTasks: (state) => state.tasks.length,
  },
  actions: {
    addTask(name: string) {
      this.tasks.push({ name, done: false });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}
