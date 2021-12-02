<template>
   <div>
      <h1>Todo Important</h1>
         <ListTodo v-for="(t, index) in todos" 
   :key="index" 
   :todo="t">
   </ListTodo>
   </div>
</template>
<script>

import ListTodo from "./ListTodo.vue"
import TodoService from "../service/TodoService"

export default {
   data(){
      return {
         todos : []
      }
   },
   components : {
      ListTodo
   },
   async mounted(){
      try{
         const completedTodo = await TodoService.getImportantTodos()
         completedTodo.forEach(todo =>{
            this.todos.push(todo.data())
         })
      }catch(e){
      }
   }
   }
</script>
