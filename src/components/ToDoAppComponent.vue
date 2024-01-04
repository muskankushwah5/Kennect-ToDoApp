<template>
  <div>
    <h2>Todo List</h2>
    <input v-model="newTask" placeholder="Enter a new task" />
    <button class="styled-button" @click="addTask">Add Task</button>

    <!-- Incomplete Tasks Section -->
    <section>
      <h3>Incomplete Tasks</h3>
      <div class="task-cards">
        <div v-for="(task, index) in $store.incompleteTasks" :key="index" class="task-card">
          <div>
            <input type="checkbox" v-model="task.done" class="styled-checkbox" @change="toggleTask(index)" />
            <label :class="{ 'task-done': task.done }">{{ task.title }}</label>
          </div>
          <div v-if="$store.editingIndex === -1">
            <button class="styled-button" @click="editTask(index)">Edit</button>
            <button class="styled-button" @click="deleteTask(index)">Delete</button>
          </div>
          <div v-if="$store.editingIndex === index">
            <input v-model="$store.tasks[index].title" class="edit-input" />
            <button class="styled-button" @click="saveTask(index)" :disabled="task.done">Save</button>
            <button class="styled-button" @click="cancelEdit(index)">Cancel</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Completed Tasks Section -->
    <section>
      <h3>Completed Tasks</h3>
      <div class="task-cards">
        <div v-for="(task, index) in $store.completedTasks" :key="index" class="task-card">
          <label :class="{ 'task-done': task.done }">{{ task.title }}</label>
          <button class="styled-button" @click="deleteTask(index)">Delete</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useTaskStore } from '../store/taskStore';

export default {
  data() {
    return {
      newTask: '',
    };
  },
  methods: {
    addTask() {
      this.$store.addTask(this.newTask);
      this.newTask = '';
    },
    toggleTask(index) {
      this.$store.toggleTask(index);
    },
    editTask(index) {
      this.$store.editTask(index);
    },
    saveTask(index) {
      this.$store.saveTask(index);
    },
    cancelEdit(index) {
      this.$store.cancelEdit(index);
    },
    deleteTask(index) {
      this.$store.deleteTask(index);
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
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-right: 10px;
  min-width: 200px;
  transition: transform 0.2s ease-in-out;
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
  background-color: #3498db;
  color: #fff;
  border: none;
  outline: none;
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

.edit-input {
  margin-right: 8px;
  padding: 8px;
  border: 1px solid #3498db;
  border-radius: 4px;
}

</style>

  
