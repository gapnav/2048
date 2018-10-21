<template lang="pug">
  .cell(v-bind:class="cell_class") {{ number }}
</template>

<script>
  import Cell from './cell'

  export default {
    components: { Cell },

    props: ['cell_number'],

    data(){
      return {}
    },

    computed: {
      number(){
        if (!this.cell_number){
          return '';
        } else if (this.cell_number.value > 1000) {
          return Math.floor(this.cell_number.value / 1000) + 'k';
        } else {
          return this.cell_number.value;
        }
      },

      cell_class(){
        let classes = [];
        if (this.cell_number) {
          classes.push('cell_' + this.cell_number.value);
          if (this.cell_number.value > 1000){
            classes.push('thousands');
          }
        }
        return classes;
      }
    }
  }
</script>

<style lang="scss">
  .cell {
    display: table-cell;
    background-color: #555555;
    height: 64px;
    width: 64px;
    color: white;
    font-size: 36px;
    text-align: center;
    vertical-align: middle;
    &.thousands {
      color: yellow;
    }

    &.cell_2      {background-color: #4169E1}
    &.cell_4      {background-color: #5F9EA0}
    &.cell_8      {background-color: #228B22}
    &.cell_16     {background-color: #B8860B}
    &.cell_32     {background-color: #D2691E}
    &.cell_64     {background-color: #FF6600}
    &.cell_128    {background-color: #FF0000}
    &.cell_256    {background-color: #FF0088}
    &.cell_512    {background-color: #DD00FF}
    &.cell_1024   {background-color: #CD5C5C}
    &.cell_2048   {background-color: #7799FF}
    &.cell_4096   {background-color: #448866}
    &.cell_8192   {background-color: #886644}
    &.cell_16384  {background-color: #884488}
    &.cell_32768  {background-color: #DA70D6}


  }
</style>
