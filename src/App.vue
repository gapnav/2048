<template lang="pug">
  #app
    p Points: {{ game_field.points }}
    button(v-on:click="toggleShow") show
    table.field(v-if="game_field && show")
      tr(v-for="row in field")
        td(v-for="cell in row") {{ cell ? cell.value : '&nbsp;&nbsp;&nbsp;' }}

</template>

<script>
  import Field from '@/javascripts/game/field';

  export default {
    data(){
      return {
        game_field: null,
        show: true
      }
    },

    computed: {
      field(){
        return this.game_field.field;
      }
    },

    created(){
      this.game_field = new Field();

      window.onkeyup = (e) => {
        switch (e.keyCode) {
          case 37:
            this.game_field.move('left');
            break;
          case 38:
            this.game_field.move('up');
            break;
          case 39:
            this.game_field.move('right');
            break;
          case 40:
            this.game_field.move('down');
            break;
        } // switch e.keyCode
      } // onkeyup
    },

    methods: {
      toggleShow(){
        this.show = !this.show;
      }
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
