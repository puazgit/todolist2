<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to="{name : 'all'}">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{name : 'completed'}">Completed</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{name : 'important'}">Important</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page">Delete</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{name : 'contoh-vuex'}">Contoh Vuex</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view></router-view>
    <!-- <SimpleTodo></SimpleTodo> -->
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
