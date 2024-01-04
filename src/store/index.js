// src/store/taskStore.js
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    editingIndex: -1,
    originalTaskTitle: '',
  }),
  getters: {
    incompleteTasks: (state) => state.tasks.filter(task => !task.done),
    completedTasks: (state) => state.tasks.filter(task => task.done),
  },
  actions: {
    addTask(newTask) {
      if (newTask.trim() === '') {
        return;
      }
      this.tasks.push({ title: newTask, done: false });
    },
    toggleTask(index) {
      if (this.index === null) {
        this.tasks[index].done = !this.tasks[index].done;
      }
    },
    editTask(index) {
      this.editingIndex = index;
      this.originalTaskTitle = this.tasks[index].title;
    },
    saveTask(index) {
      if (!this.tasks[index].done) {
        if (this.tasks[index].title.trim() === '') {
          this.tasks[index].title = this.originalTaskTitle;
        }
      }
      this.editingIndex = -1;
    },
    cancelEdit(index) {
      this.tasks[index].title = this.originalTaskTitle;
      this.editingIndex = -1;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});
