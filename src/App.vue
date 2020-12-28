<template>
  <div>
    <sudoku-container />
  </div>
</template>

<script>
import SudokuContainer from "@/components/SudokuContainer";

export default {
  name: 'App',
  components: {
    SudokuContainer
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
