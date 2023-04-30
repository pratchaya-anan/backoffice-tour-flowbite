import { defineStore } from 'pinia'

export const useDatatour = defineStore('tour', () => {
  const tourid = ref('t1')
  const datatour = ref([
    {
      tourid: "t1",
      tourname: "เกาะเสม็ด เสร็จบางราย",
      programname: "เกาะเสม็ด เสร็จบางราย",
      datestart: "16/04/2566",
      dateend: "20/04/2566",
      day: 5,
      night: 4,
      go: "นครชัยแอร์",
      back: "AirAsia",
      summember: 5,
      state: 1,
      member: [
        {
          idmember: "m1",
          name: "มะยม ขมจัง",
          nameeng: "Mayom Khomjung",
          idencard: "1245865475854",
          passport: "A251368",
          nationa: "ไทย",
          gender: "ชาย",
          bedtype: "คู่"
        },
        {
          idmember: "m2",
          name: "มะยม ขมนิดหน่อย",
          nameeng: "Mayom Khomjung",
          idencard: "1245865475854",
          passport: "A251368",
          nationa: "ไทย",
          gender: "ชาย",
          bedtype: "คู่"
        },
        {
          idmember: "m1",
          name: "มะยม ขมมาก",
          nameeng: "Mayom Khomjung",
          idencard: "1245865475854",
          passport: "A251368",
          nationa: "ไทย",
          gender: "ชาย",
          bedtype: "คู่"
        },
      ],
      hotel: [
        { 
          id: "h1",
          name: "ริเวอร์แคว กาญจนบุรี", 
          sumroom: 45
        },
        { 
          id: "h2",
          name: "เอเชีย ชะอำ", 
          sumroom: 45
        }
      ],
      guide: [
        {
          name: "นายขวัญชัย บูรณฤกษ์",
          phone: "0833076329"
        },
        {
          name: "นายพิษณุ บุญลี",
          phone: "0632452369"
        },
      ],
      vehicle: [
        {
          name: "รถทัวร์นิลผกา 1",
          type: "ไป",
        },
        {
          name: "พิกุล 2",
          type: "ไปกลับ",
        }
      ]
    },
    {
      tourid: "t2",
      tourname: "เกาะเสม็ด เสร็จหลายราย",
      programname: "เกาะเสม็ด เสร็จหลายราย",
      datestart: "16/04/2566",
      dateend: "20/04/2566",
      day: 5,
      night: 4,
      go: "นครชัยแอร์",
      back: "AirAsia",
      summember: 5,
      state: 2,
      member: [],
    },
    {
      tourid: "t3",
      tourname: "เกาะเสม็ด เสร็จทุกราย",
      programname: "เกาะเสม็ด เสร็จทุกราย",
      datestart: "16/04/2566",
      dateend: "20/04/2566",
      day: 5,
      night: 4,
      go: "นครชัยแอร์",
      back: "AirAsia",
      summember: 5,
      state: 3,
      member: [],
    },
  ])
  const tourfiltered = computed(() => datatour.value.find(item => item.tourid == tourid.value));

  function settourid(idtour: string) {
    tourid.value = idtour;
  }

  //New tour
  function addtour(item: any) {
    datatour.value.push(item);
    console.log(datatour.value);
    console.log(tourid.value);
  }

  //Add guide to tour
  function addguid(item: any) {
      
  }

  return { tourid, datatour, tourfiltered, settourid, addtour }
})
