// src/store.js
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    editTask(index, updatedTask) {
      this.tasks.splice(index, 1, updatedTask);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleCompletion(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
  },
});
