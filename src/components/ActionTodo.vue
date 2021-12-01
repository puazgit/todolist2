<template>
<div>
<button class="btn btn-danger" style="" @click="hapus_items"><i class="fa fa-trash"></i>delete</button>
<button class="btn btn-info" v-if="checked" style="" @click="$emit('edit')"><i class="fa fa-pencil"></i>edit</button>
</div>
</template>
<script>

export default {
   name : 'ActionTodo',
   props :['checked'],
   methods:{
    hapus_items(){
      this.$emit('hapus')
    }
  }
}
</script>
