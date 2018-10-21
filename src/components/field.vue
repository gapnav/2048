<template lang="pug">
  .field
    .row(v-for="y in game_field.height()" v-bind:key="'row_'+(y-1)")
      cell(
        v-for="x in game_field.width()"
        v-bind:key="'cell_'+(y-1)+'_'+(x-1)+'_'+game_field.moves"
        v-bind:cell_number="game_field.field[y-1][x-1]"
      )
</template>

<script>
  import Cell from './cell'

  export default {
    components: { Cell },

    props: ['game_field'],

    data(){
      return {}
    },

  }
</script>

<style lang="scss">
  .field {
    background-color: #444444;
    display: table;
    border-collapse:separate;
    border-spacing:5px;
    .row {
      display: table-row;
    }
  }
</style>
