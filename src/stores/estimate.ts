import { defineStore } from 'pinia'

export const estimate = defineStore('useEstimate', () => {

    const id = ref(0);

    const dataestimate = ref([
        {
            id: 0,
            name: "",
            department: "",
            date: "",
            objectives: "",
            details: [{
                type: "",
                price: 0,
                quantity: 0,
                detail: "",

            }],
        }
    ])


    const idfiltered = computed(() => dataestimate.value.find(item => item.id == id.value));

    const totalPrice = computed(() => {
        if (idfiltered.value) {
            return idfiltered.value.details.reduce((total, detail) => {
                return total + (detail.price * detail.quantity);
            }, 0);
        } else {
            return 0;
        }
    });

    function setid(idtour: number) {
        id.value = idtour;
        console.log("ID:", id.value);
        console.log("ID Detail:", idfiltered.value);
    }



    function additem(item: {
        name: string,
        department: string,
        date: string,
        objectives: string
        details: any,
    }) {
        const lastId = dataestimate.value[dataestimate.value.length - 1].id
        const newId = lastId + 1
        const newItem = {
            id: newId,
            name: item.name,
            department: item.department,
            date: item.date,
            objectives: item.objectives,
            details: item.details,
        }
        dataestimate.value.push(newItem)
        console.log(dataestimate.value)
    }

    return { dataestimate, setid, idfiltered, additem, totalPrice }
})