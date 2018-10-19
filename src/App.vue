<template lang="pug">
  #app
    | Hello
    .sp span
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  #app {
    background: #eee;
    color: blue;
    .sp {
      color: $col;
    }
  }
</style>
