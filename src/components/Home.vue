<template>
  <div class="home">
    <toolbar></toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Toolbar from "./Toolbar";
  export default {
    name: 'home',
    components: {Toolbar},
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
