import { defineStore } from 'pinia';

export const dataGuide = defineStore('guide', () => {
    const guideid = ref('')
    const dataguide = ref([
        {
            guideid: "1",
            guidename: "สมศักดิ์ สบาย",
            guidephone: "0872256745",
            // guidephoto: "../assets/images/guide1.jpg",
        }
    ])

    function setguide(idguide: string) {
        guideid.value = idguide;
        console.log(guideid.value);
    }

    return { guideid, dataguide, setguide}
})