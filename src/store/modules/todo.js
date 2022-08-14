import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {

    const items = ref([])

    const item = ref(null)

    const count = computed(_ => items.value.length)

    const add = _ => {
        if (item.value !== null) {
            items.value.push({
                id: Math.random(),
                text: item.value
            })
            item.value = null
        }
    }

    const remove = id => {
        items.value = items.value.filter(i => i.id !== id)
    }

    const clear = _ => items.value.length = 0

    return {
        items,
        item,
        count,
        add,
        remove,
        clear
    }
}, {
    // 需要持久化的加上这个
    persist: true
})