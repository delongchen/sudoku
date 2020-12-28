<template>
  <div>
    {{ count }}
    <button @click="increment">add</button>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  name: "SudokuContainer",
  setup() {
    const store = useStore()

    return {
      count: computed(() => store.state.count),
      increment: () => store.commit('increment')
    }
  }
}
</script>

<style scoped>

</style>
