<template>
   <div>
      <br>
      <h3>Contoh Vuex</h3>
      <br>
      {{ $store.state.counter }}
      <br>
      <button @click="increment" class="btn btn-info">Tambah 1</button>
   </div>
</template>

<script>

export default {
methods :{
   increment(){
      console.log("IJ");
      this.$store.commit('incrementCounter');
   }
}
}
</script>
