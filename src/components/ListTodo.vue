<template>
   <div class="container pl-3 text-light text-left m-2" :class="[todo.checked ? 'bg-primary' : 'bg-success']">
      <input type="checkbox" v-model="todo.checked"><i class="bi bi-star-fill" v-show="todo.isImportant"></i>
       {{ firstCapitalized  }}
       <span class="badge badge-warning"><timeago :datetime="todo.created_at" :auto-update="60"></timeago></span>
       
       <ActionTodo  @edit="$emit('edit')" v-on:hapus="hapus_item" :checked="todo.checked"></ActionTodo>
   </div>
</template>
<script>
import ActionTodo from './ActionTodo.vue'
import {format} from 'timeago.js'

export default({
   name : 'ListTodo',
   components: {
    ActionTodo,
  },
   props :['todo'],
   data(){
      return{
         // checked : false
      }
   },
   methods :{
      hapus_item() {
         this.$emit('hapus')
    },
   },
   computed :{
      firstCapitalized : function(){
         const words = this.todo.title.split(" ");

         const capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.substring(1);
         });

         return capitalizedWords.join(" ");
      // return this.todo.title.charAt(0).toUpperCase() + this.todo.title.substr(1)
      },

      formattedDate : function(){
         return format(this.todo.created_at);
      }
   },
})
</script>
