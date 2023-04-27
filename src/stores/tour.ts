import { defineStore } from 'pinia'

export const useDatatour= defineStore('tour', () => {
  const tourid = ref('')
  const datatour = ref([
    {
      tourid: "1",
      tourname: "เกาะเสม็ด เสร็จทุกราย",
      programname: "เกาะเสม็ด เสร็จทุกราย",
      datestart: "16/04/2566",
      dateend: "20/04/2566",
      day: 5,
      night: 4,
      go: "นครชัยแอร์",
      back: "AirAsia",
      member: 5,
      state: 1,
    },
    {
      tourid: "2",
      tourname: "เกาะเสม็ด เสร็จทุกราย",
      programname: "เกาะเสม็ด เสร็จทุกราย",
      datestart: "16/04/2566",
      dateend: "20/04/2566",
      day: 5,
      night: 4,
      go: "นครชัยแอร์",
      back: "AirAsia",
      member: 5,
      state: 2,
    },
    {
      tourid: "3",
      tourname: "เกาะเสม็ด เสร็จทุกราย",
      programname: "เกาะเสม็ด เสร็จทุกราย",
      datestart: "16/04/2566",
      dateend: "20/04/2566",
      day: 5,
      night: 4,
      go: "นครชัยแอร์",
      back: "AirAsia",
      member: 5,
      state: 3,
    },
  ])


  function settourid(idtour: string) {
    tourid.value = idtour;
    console.log(tourid.value)
  }  

  return { tourid, datatour }
})
