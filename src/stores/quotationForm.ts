import { defineStore } from 'pinia'

export const quotationForm = defineStore('useQuotationForm', () => {
    const data = ref([
        {
            id: 0,
            customer_name: "",
            contact_name: "",
            tax_number: "",
            customer_code: "",
            address: "",
            confirm_date: "",
            send_date: "",
            faction: "",
            phone: "",
            email: "",
            product: [],
            set_pricedate: "",
            deposit: "",

        }
    ])
    function additem(item: {
        customer_name: string,
        contact_name: string,
        tax_number: string,
        customer_code: string,
        address: string,
        confirm_date: string,
        send_date: string,
        faction: string,
        phone: string,
        email: string,
        product: any,
        set_pricedate: string,
        deposit: string,
      }) {
        const lastId = data.value[data.value.length - 1].id
        const newId = lastId + 1
        const newItem = {
          id: newId,
          customer_name: item.customer_name,
          contact_name: item.contact_name,
          tax_number: item.tax_number,
          customer_code: item.customer_code,
          address: item.address,
          confirm_date: item.confirm_date,
          send_date: item.send_date,
          faction: item.faction,
          phone: item.phone,
          email: item.email,
          product: item.product,
          set_pricedate: item.set_pricedate,
          deposit: item.deposit,
        }
        data.value.push(newItem)
        console.log(data.value)
      }
    return { data, additem }

})