import { defineStore } from 'pinia'

export const kao = defineStore('useKao', () => {
    const id = ref(0);

    const data = ref([{
        id: 1,
        member: [
            {
                num: 1,
                name: "nine",
            },
            {
                num: 2,
                name: "ten",
            }
        ]
    },
    {
        id: 2,
        member: [
            {
                num: 3,
                name: "eleven",
            },
            
        ]
    }
    ]);

    function additem(item: { num: number, name: string }) {  
        const newMember = { num: item.num, name: item.name };
        const group = data.value.find(group => group.id === 2);
        if (group) {
            group.member.push(newMember);
        }
        console.log(data.value);
    }
    

    return { id, data, additem };
})