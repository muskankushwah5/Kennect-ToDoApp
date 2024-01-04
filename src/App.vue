<template>
  <div id="app">
    <header>
      <h1>Vue.js Todo App</h1>
    </header>
    <main>
      <TodoItem />
    </main>
  </div>
</template>

<script>
import TodoItem from './components/ToDoAppComponent.vue';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      tasks: [], // Initialize tasks as an empty array or with default values
    };
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Abhaya Libre', sans-serif;
  background-color: #f4f4f4;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

header {
  background-color: #3498db;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  margin: 0;
  color: white;
  font-size: 2em;
  background-color: #5c87ae;
  padding: 10px;
  border-radius: 20px;
  width: 80%;
  margin-bottom: 20px;
}

main {
  width: 100%;
  max-width: 600px;
  background-color: rgba(203, 180, 180, 0.7);
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-height: 60vh;
  height:auto;
}

/* Add transition for a fade effect */
.transition-enter-active,
.transition-leave-active {
  transition: opacity 0.5s;
}

.transition-enter, .transition-leave-to {
  opacity: 0;
}
</style>
