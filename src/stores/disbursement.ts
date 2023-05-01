import { defineStore } from "pinia";

export const disbursement = defineStore("datadisbursement", () => {
  const tourid = ref("1");
  const datarequisition = ref([
    {
      tourid: "1",
      name: "แตงโม โอ้โอ",
      date: "15/05/66",
      objective:'ค่าอาหาร',
      money: 10000,
      clear: [
        {
          namecle: "ดวงดี  ศรีสุข",
          details: 'ค่าอาหาร',
          money1:500,
          money: 2000,
        },
        {
          namecle: "ดวงดี  ศรีสุข",
          details: 'ค่าอาหาร',
          money1:500,
          money: 2000,
        }

      ],
    },
    {
      tourid: "2",
      namecle: "ดวงดี  ศรีสุข",
      date: "16/05/66",
      name: "แตงโม โอ้โอ",
      objective: 'ค่ารถ',
      money: 4500,
      clear: [
        {
          namecle: "ดวงดี  ศรีสุข",
          details: 'ค่าอาหาร',
          money1:500,
          money: 2000,
        },
      ]
      
    },
    {
      tourid: "3",
      namecle: "ดวงดี  ศรีสุข",
      date: "16/05/66",
      name: "แตงโม โอ้โอ",
      objective: 'ค่าโรงแรม',
      money: 9000,
    },
  ]);
  
  
  
 const dataFiter = computed(() => datarequisition.value.find(item =>item.tourid == tourid.value ));

  function settourid(idtour: string) {
    tourid.value = idtour;
    console.log(tourid.value);
  }

  function additems(dataclear:any) {
    // datarequisition.value.push(dataclear) ;
    console.log(dataclear);
    
  }
  

  return { tourid, datarequisition,settourid,dataFiter,additems  };
});
