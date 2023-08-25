<script setup>
import { ref } from 'vue';
// import {useCounterStore} from '../stores/counter';
// const counter = useCounterStore();
const newTask = ref('');
const tasks = ref([]);

function add() {
  if (newTask.value !== '') {
    const task = {text: newTask.value };
   tasks.value.unshift(task);
    newTask.value = '';
  }
}

const taskEdit = ref({});

function edit(task) {
  if (Object.keys(taskEdit.value).length === 0) {
    taskEdit.value = task;
  } else {
    taskEdit.value = {};
  }
}

function deleteTask(task) {
  const removeMe = tasks.value.indexOf(task);
  if (removeMe !== -1) {
    tasks.value.splice(removeMe, 1);
  }
}

</script>


<template>
    <div class="todo">
      <input type="text" v-model="newTask" placeholder="Add Task...">
      <button @click="add">Save</button>
      <h1>TO-DO</h1>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <div class="task-item">
            <p v-if="taskEdit !== task">{{ task.text }}</p>
            <input v-else type="text" v-model="task.text">
            <div class="button-group">
              <button @click="edit(task)">Edit</button>
              <button @click="deleteTask(task)">Delete</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .todo {
    padding-top: 37px;
  }
  input {
    max-width: 500px;
    width: 100%;
    max-height: 56px;
    height: 100%;
  }
  li {
    list-style: none;
  }
  .task-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .button-group {
    display: flex;
    gap: 5px;
  }
  </style>
  
  


