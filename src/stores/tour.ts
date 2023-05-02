import { defineStore } from 'pinia'

export const useDatatour = defineStore('tour', () => {
  const tourid = ref('t1')
  const tourdata = ref([
    {
      tourid: "t1",
      tourname: "เกาะเสม็ด เสร็จบางราย",
      programname: "เกาะเสม็ด เสร็จบางราย",
      day: 5,
      night:  4,
      datestart: "16/04/2566",
      dateend: "20/04/2566",
      priceunit: 5000,
      vat: 0,
      summember: 5,
      maxmember: 10,
      state: 1,
      member: [
        { idmember: "m1", bedtype: "คู่" },
        { idmember: "m2", bedtype: "คู่" },
        { idmember: "m3", bedtype: "คู่" },
      ],
      hotel: [
        { hotel_id: "h1", sumroom: 45 },
        { hotel_id: "h2", sumroom: 45 },
      ],
      guide: [
        { guide_id: "g1" },
        { guide_id: "g2" },
      ],
      vehicle: [
        { vehicle_id: "v1" },
        { vehicle_id: "v2" },
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
      summember: 4,
      maxmember: 10,
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
      summember: 3,
      maxmember: 10,
      state: 3,
      member: [],
    },
  ]);
  const memberdata = ref([
    {
      idmember: "m1",
      name: "มะยม ขมจัง",
      nameeng: "Mayom Khomjung",
      idencard: "1245865475854",
      passport: "A251368",
      nationa: "ไทย",
      gender: "ชาย",
      comment: "",
    },
    {
      idmember: "m2",
      name: "มะยม ขมนิดหน่อย",
      nameeng: "Mayom Khomjung",
      idencard: "1245865475854",
      passport: "A251368",
      nationa: "ไทย",
      gender: "ชาย",
      comment: "",
    },
    {
      idmember: "m1",
      name: "มะยม ขมมาก",
      nameeng: "Mayom Khomjung",
      idencard: "1245865475854",
      passport: "A251368",
      nationa: "ไทย",
      gender: "ชาย",
      comment: "",
    },
  ]);
  const hoteldata = ref([ 
    { 
      hotel_id: "h1",
      name: "ริเวอร์แคว กาญจนบุรี",
      comment: "",
    },
    { 
      hotel_id: "h2",
      name: "เอเชีย ชะอำ",
      comment: "",
    }
  ]);
  const guidedata = ref([
    {
      guideid: "g1",
      guidename: "นายขวัญชัย บูรณฤกษ์",
      phone: "0833076329",
      comment: "",
    },
    {
      guideid: "g2",
      guidename: "นายพิษณุ บุญลี",
      phone: "0632452369",
      comment: "",
    },
    {
      guideid: "g3",
      guidename: "ปลาดาว",
      phone: "0840000000",
      comment: "",
    },
    {
      guideid: "g4",
      guidename: "อลิสโซ",
      phone: "0848230000",
      comment: "",
    },
  ]);
  const vehicledata = ref([
    {
      vehicle_id: "v1",
      name: "รถทัวร์นิลผกา 1",
      comment: "",
    },
    {
      vehicle_id: "v2",
      name: "พิกุล 2",
      comment: "",
    }
  ])

  const tourfiltered = computed(() => tourdata.value.find(item => item.tourid == tourid.value));

  function settourid(idtour: string) {
    tourid.value = idtour;
    console.log("IdTour",tourid.value);
  }

  //New tour
  function addtour(item: any) {
    tourdata.value.push(item);
    settourid(item.tourid.toString());
    console.log("DataTour",tourdata.value)
  }

  //Add guide to tour
  function addguide(item: any) {
    item.value.forEach((element: any) => {
      // console.log(element)
      tourfiltered.value.guide.push({guide_id: element});      
    });
    console.log("Tourfil2",tourfiltered.value)
    console.log("Tour",tourdata.value)
  }

  function newguide(item: any) {
    // console.log(item);
    guidedata.value.push(item);
    // console.log(guidedata.value);
  }

  return { tourid, tourdata, guidedata, tourfiltered, settourid, addtour, addguide, newguide }
})
