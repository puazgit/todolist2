<template>
  <div id="app">
    <SimpleTodo></SimpleTodo>
  </div>
</template>

<script>
import SimpleTodo from './components/SimpleTodo.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
  name: 'App',
  components: {
    SimpleTodo,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
