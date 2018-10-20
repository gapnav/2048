<template lang="pug">
  #app
    table.field(v-if="field.field")
      tr(v-for="row in field.field")
        td(v-for="cell in row") {{ cell ? cell.value : '&nbsp;&nbsp;&nbsp;' }}

</template>

<script>
  import Field from '@/javascripts/game/field';

  export default {
    data(){
      return {
        field: null
      }
    },

    created(){
      this.field = new Field();
    }
  }
</script>

<style lang="scss">
  #app {
    table, th, td {
      border: 1px solid black;
    }
  }
</style>
