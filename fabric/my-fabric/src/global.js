import {
    ref
} from 'vue'
const board = {
    curIndex: ref(1),

    setCurIndex: function (num) {
        this.curIndex.value = num
    }
}
export default board;