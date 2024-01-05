<template>
  <div>
    <h2>Todo List</h2>
    <input v-model="newTask" placeholder="Enter a new task" class="styled-input" />
    <button @click="addTask" class="styled-button">Add Task</button>

    <section>
      <h3>Incomplete Tasks</h3>
      <div class="task-cards">
        <div v-for="(task, index) in incompleteTasks" :key="index" class="task-card incomplete-task">
          <div>
            <input type="checkbox" v-model="task.done" class="styled-checkbox" @change="toggleTask(index)" />
            <label :class="{ 'task-done': task.done }">{{ task.title }}</label>
          </div>
          <div v-if="editingIndex === -1">
            <button class="styled-button red-effect" @click="editTask(index)">Edit</button>
            <button class="styled-button red-effect" @click="deleteTask(index)">Delete</button>
          </div>
          <div v-if="editingIndex === index">
            <input v-model="tasks[index].title" class="edit-input" />
            <button class="styled-button red-effect" @click="saveTask(index)" :disabled="task.done">Save</button>
            <button class="styled-button red-effect" @click="cancelEdit(index)">Cancel</button>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3>Completed Tasks</h3>
      <div class="task-cards">
        <div v-for="(task, index) in completedTasks" :key="index" class="task-card completed-task">
          <label :class="{ 'task-done': task.done }">{{ task.title }}</label>
          <button class="styled-button green-effect" @click="deleteTask(index)">Delete</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useTaskStore } from '../store/index';

export default {
  data() {
    return {
      newTask: '',
    };
  },
  computed: {
    incompleteTasks() {
      return useTaskStore().incompleteTasks;
    },
    completedTasks() {
      return useTaskStore().completedTasks;
    },
    editingIndex() {
      return useTaskStore().editingIndex;
    },
    tasks() {
      return useTaskStore().tasks;
    },
  },
  methods: {
    addTask() {
      useTaskStore().addTask(this.newTask);
      this.newTask = '';
    },
    toggleTask(index) {
      useTaskStore().toggleTask(index);
    },
    editTask(index) {
      useTaskStore().editTask(index);
    },
    saveTask(index) {
      useTaskStore().saveTask(index);
    },
    cancelEdit(index) {
      useTaskStore().cancelEdit(index);
    },
    deleteTask(index) {
      useTaskStore().deleteTask(index);
    },
  },
};
</script>

<style scoped>
.task-done {
  text-decoration: line-through;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  color: #333;
  margin-top: 20px;
  height: 100vh; /* Set height to 100% of viewport height */
}

header {
  background-color: #3498db;
  padding: 20px;
  text-align: center;
  width: 80%; /* Set width to 80% */
  border-radius: 20px; /* Add rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  margin: 0;
  color: white;
}

main {
  margin-top: 20px;
  width: 80%; /* Set width to 80% */
  max-width: 600px;
  overflow-x: hidden; /* Hide horizontal overflow */
}

/* Add custom scrollbar styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #3498db;
  border-radius: 10px;
}

.task-cards {
  display: flex;
  overflow-x: auto;
  margin-bottom: 20px;
  scrollbar-width: thin; /* Firefox scrollbar */
}

.task-card {
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-right: 10px;
  min-width: 200px;
  transition: transform 0.2s ease-in-out;
}

.incomplete-task {
  background-color: #ffb3b3; /* Light red background for incomplete tasks */
}

.completed-task {
  background-color: #b3ffb3; /* Light green background for completed tasks */
}

.task-card:hover {
  transform: scale(1.05);
}

.styled-button {
  font-family: 'Abhaya Libre', sans-serif;
  border-radius: 20px;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;
  border: none;
  outline: none;
}

.styled-button.red-effect {
  background-color: #9e7373; /* Red background on hover for incomplete tasks */
  color: white;
}

.styled-button.green-effect {
  background-color: #b5deb5; /* Green background on hover for completed tasks */
  color: white;
}

.styled-checkbox {
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #3498db;
  cursor: pointer;
  margin-right: 8px;
}

.styled-input {
  border: 1px solid #3498db;
  border-radius: 4px;
  padding: 8px;
  margin-right: 8px;
}

.edit-input {
  margin-right: 8px;
  padding: 8px;
  border: 1px solid #3498db;
  border-radius: 4px;
}

</style>
