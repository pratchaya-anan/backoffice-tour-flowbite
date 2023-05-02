import { defineStore } from 'pinia'

export const estimate = defineStore('useEstimate', () => {
    const data = ref([
        {
            id: 0,
            name: "",
            department: "",
            date: "",
            objectives: "",
            details: [{}],
        }
    ])
    function additem(item: {
        name: string,
        department: string,
        date: string,
        objectives: string
        details: any,
    }) {
        const lastId = data.value[data.value.length - 1].id
        const newId = lastId + 1
        const newItem = {
            id: newId,
            name: item.name,
            department: item.department,
            date: item.date,
            objectives: item.objectives,
        }
        data.value.push(newItem)
        console.log(data.value)
    }
    return { data, additem }
})