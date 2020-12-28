import {createStore} from 'vuex'
import {createCellsProxy} from "@/core/Sudoku";
import Config from '@/config'

const {
  cells
} = createCellsProxy(Config.size)

export default createStore({
  state() {
    return {
    }
  },
  mutations: {
  }
})
