<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl">
      <div class="min-h-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">ใบเสนอราคา/ข้อมูลลูกค้า</h2>
        <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </button>
        <form action="#">
          <div class="grid gap-4 grid-cols-2 sm:gap-6">
            <div>
              <label for="namecustomer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อลูกค้า</label>
              <input type="text" name="namecustomer" id="namecustomer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div>
              <label for="namecontact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อผู้ติดต่อ</label>
              <input type="text" name="namecontact" id="namecontact" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="w-full">
              <label for="taxid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขประจำตัวผู้เสียภาษี</label>
              <input type="text" name="taxid" id="taxid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="w-full">
              <label for="customerid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสลูกค้า</label>
              <input type="text" name="ustomerid" id="ustomerid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="col-span-2">
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ที่อยู่</label>
              <input type="text" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>

            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ยืนยันราคาภายในวันที่">
            </div>
            
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="วันที่ส่งของ">
            </div>

            <div class="col-span-2">
              <label for="customerid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสลูกค้า</label>
              <input type="text" name="ustomerid" id="ustomerid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="w-full">
              <label for="customerid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ฝ่าย</label>
              <input type="text" name="ustomerid" id="ustomerid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="w-full">
              <label for="customerid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เบอร์โทรศัพท์</label>
              <input type="text" name="ustomerid" id="ustomerid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="w-full">
              <label for="customerid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เมล</label>
              <input type="text" name="ustomerid" id="ustomerid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
          </div>
        </form>
      </div>
      
      <div class="mt-6 min-h-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">รายการสินค้า</h2>
        <form action="#">
          <div class="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-6">
            <div class="col-span-1 lg:col-span-2 w-full">
              <label for="namecustomer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสสินค้า</label>
              <input type="text" name="namecustomer" id="namecustomer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="col-span-1 lg:col-span-1 w-full">
              <label for="namecontact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวน</label>
              <input type="number" name="namecontact" id="namecontact" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="col-span-1 lg:col-span-1 w-full">
              <label for="taxid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคาต่อหน่วย</label>
              <input type="number" name="taxid" id="taxid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="col-span-1 lg:col-span-1 w-full">
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ส่วนลด</label>
              <input type="number" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="col-span-1 lg:col-span-1 w-full">
              <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษี (0% 7% 9%)</label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <!-- <option selected>Choose a country</option> -->
                <option value="US">0%</option>
                <option value="CA">7%</option>
                <option value="FR">9%</option>
              </select>
            </div>

            <div class="col-span-1 lg:col-span-3 w-full">
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายการสินค้า</label>
              <input type="text" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>

            <button type="button" class="col-span-2 lg:col-span-1 w-full mt-7 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">เพิ่มข้อมูล</button>
            

          </div>
        </form>

        <div class="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          ลำดับ
                      </th>
                      <th scope="col" class="px-6 py-3">
                          รหัสสินค้า
                      </th>
                      <th scope="col" class="px-6 py-3">
                          รายการสินค้า
                      </th>
                      <th scope="col" class="px-6 py-3">
                          จำนวน
                      </th>
                      <th scope="col" class="px-6 py-3">
                          ราคาต่อหน่วย
                      </th>
                      <th scope="col" class="px-6 py-3">
                          ส่วนลด
                      </th>
                      <th scope="col" class="px-6 py-3">
                          ภาษี
                      </th>
                      <th scope="col" class="px-6 py-3">
                          จำนวนเงิน
                      </th>
                      <th scope="col" class="px-6 py-3">
                          จัดการ
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                      </th>
                      <td class="px-6 py-4">
                        Q-4693120596
                      </td>
                      <td class="px-6 py-4">
                        อุบล
                      </td>
                      <td class="px-6 py-4">
                        1
                      </td>
                      <td class="px-6 py-4">
                        10,000.00
                      </td>
                      <td class="px-6 py-4">
                        0
                      </td>
                      <td class="px-6 py-4">
                        10,000.00
                      </td>
                      <td class="px-6 py-4">
                        10,700.00
                      </td>
                      <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                      </th>
                      <td class="px-6 py-4">
                        Q-4693120596
                      </td>
                      <td class="px-6 py-4">
                        อุบล
                      </td>
                      <td class="px-6 py-4">
                        1
                      </td>
                      <td class="px-6 py-4">
                        10,000.00
                      </td>
                      <td class="px-6 py-4">
                        0
                      </td>
                      <td class="px-6 py-4">
                        10,000.00
                      </td>
                      <td class="px-6 py-4">
                        10,700.00
                      </td>
                      <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>

        <div class="mt-6 p-6 pb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="grid grid-cols-2 gap-4 lg:grid-cols-7 lg:gap-6">
            <div class="col-span-1">
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">กำหนดยืนราคา (กี่วัน)</label>
              <input type="number" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="col-span-1">
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ค่ามัดจำ</label>
              <input type="number" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="col-span-1">
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รวมเงิน</label>
              <input type="text" id="disabled-input" aria-label="disabled input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="10,700.00" disabled>
            </div>
            <div class="col-span-1">
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ส่วนลดสินค้า</label>
              <input type="text" id="disabled-input" aria-label="disabled input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="0.00" disabled>
            </div>
            <div class="col-span-1">
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ก่อนคำนวนภาษี</label>
              <input type="text" id="disabled-input" aria-label="disabled input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="10,000.00" disabled>
            </div>
            <div class="col-span-1">
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษีมูลค่าเพิ่ม</label>
              <input type="text" id="disabled-input" aria-label="disabled input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="700.00" disabled>
            </div>
            <div class="col-span-1">
              <label for="text" class="block mb-1 text-md font-bold text-gray-900 dark:text-white" >จำนวนเงินทั้งสิ้น</label>
              <input type="text" id="disabled-input" aria-label="disabled input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="10,700.00" disabled>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Datepicker from 'flowbite-datepicker/Datepicker';

// const datepickerEl = document.getElementById('datepickerId');
// new Datepicker(datepickerEl, {
//     // options
// }); 
if (process.client) {
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>