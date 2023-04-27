import { defineStore } from "pinia";

export const usetourData= defineStore('tour', () => {
const idtour = ref('')
const tourdata = ref([
    {
        idtour: "1",
        tourname: "เกาะเสม็ด เสร็จทุกราย",
        programname: "เกาะเสม็ด เสร็จทุกราย",
        date_start: "16/04/2566",
        date_end: "20/04/2566",
        day: 5,
        night: 4,
        gowith: "นครชัยแอร์",
        backwith: "AirAsin",
        member: 5,
        state: 1,
    },
    {
        idtour: "2",
        tourname: "เกาะเสม็ด เสร็จทุกราย",
        programname: "เกาะเสม็ด เสร็จทุกราย",
        date_start: "16/04/2566",
        date_end: "20/04/2566",
        day: 5,
        night: 4,
        gowith: "นครชัยแอร์",
        backwith: "AirAsin",
        member: 5,
        state: 2,
    },
    {
        idtour: "3",
        tourname: "เกาะเสม็ด เสร็จทุกราย",
        programname: "เกาะเสม็ด เสร็จทุกราย",
        date_start: "16/04/2566",
        date_end: "20/04/2566",
        day: 5,
        night: 4,
        gowith: "นครชัยแอร์",
        backwith: "AirAsin",
        member: 5,
        state: 3,
    },
    {
        idtour: "3",
        tourname: "เกาะเสม็ด เสร็จทุกราย",
        programname: "เกาะเสม็ด เสร็จทุกราย",
        date_start: "16/04/2566",
        date_end: "20/04/2566",
        day: 5,
        night: 4,
        gowith: "นครชัยแอร์",
        backwith: "AirAsin",
        member: 5,
        state: 3,
    }, 
    {
        idtour: "3",
        tourname: "เกาะเสม็ด เสร็จทุกราย",
        programname: "เกาะเสม็ด เสร็จทุกราย",
        date_start: "16/04/2566",
        date_end: "20/04/2566",
        day: 5,
        night: 4,
        gowith: "นครชัยแอร์",
        backwith: "AirAsin",
        member: 5,
        state: 3,
    }

])


function setidtour(tourid: string){
    idtour.value = tourid;
    console.log(idtour.value)
}

return {idtour,tourdata}

})