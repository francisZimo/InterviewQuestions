import {
    ref
} from 'vue'
const count = ref(0)

export default function useCounter() {
    const increase = () => {
        count.value++
    }
    const decrease = () => {
        count.value--
    }
    return {
        count,
        increase,
        decrease
    }
}