<template lang="pug">
  #app
    p Points: {{ game_field.points }}
    .wrapper
      field(v-if="game_field" v-bind:game_field="game_field")

</template>

<script>
  import GameField from '@/javascripts/game/field';
  import Field from './components/field';

  export default {
    components: { Field },

    data(){
      return {
        game_field: null
      }
    },

    computed: {
      field(){
        return this.game_field.field;
      }
    },

    created(){
      this.game_field = new GameField();

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
    }
  }
</script>

<style lang="scss">
  html {
    background: #333333;
    color: #ffffff;
  }
  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
  #app {
    table, th, td {
      border: 1px solid black;
    }
  }
</style>
