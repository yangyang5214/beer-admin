<template>
  <div class="toolbar">
    <router-link id='blog' to="/blog">blog</router-link>
    <router-link id='city' to="/city">city</router-link>
    <router-link id='bug' to="/bug">bug</router-link>
    <router-link id='me' to="/me">me</router-link>
    <router-link id='image' to="/">image</router-link>
  </div>
</template>

<script>
  export default {
    name: 'toolbar',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
