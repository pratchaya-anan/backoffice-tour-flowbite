<template>
  <!-- ข้อมูลพาหนะ -->
  <section class="p-3 sm:p-5">
    <div class="max-w-screen-lg mx-auto">
      <div class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <ol class="flex justify-center items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span
              class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              1
            </span>
            <span>
              <h3 class="font-medium leading-tight">ข้อมูลทัวร์</h3>
            </span>
            <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
            </svg>
          </li>
          <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span
              class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              2
            </span>
            <span>
              <h3 class="font-medium leading-tight">ข้อมูลไกด์</h3>
            </span>
            <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
            </svg>
          </li>
          <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            <span
              class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              3
            </span>
            <span>
              <h3 class="font-medium leading-tight">ข้อมูลโรงแรม</h3>
            </span>
            <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
            </svg>
          </li>
          <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
            <span
              class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full shrink-0 dark:border-blue-500">
              4
            </span>
            <span>
              <h3 class="font-medium leading-tight">ข้อมูลพาหนะ</h3>
            </span>
          </li>
        </ol>
      </div>

      <div class="mt-3 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          ข้อมูลพาหนะ
        </h5>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
        <form>
          <div class="grid gap-4 mb-4 grid-cols-5 mt-5">
            <div>
              <button type="button" data-modal-target="addvechicle" data-modal-toggle="addvechicle"
                class="w-full flex justify-center mt-7 px-3 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                </svg>
                เลือกพาหนะ
              </button>
            </div>
          </div>
          <div class="mt-3">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">พาหนะ</th>
                    <th scope="col" class="px-6 py-3">จำนวนพาหนะ</th>
                    <th scope="col" class="px-6 py-3">วันที่</th>
                    <th scope="col" class="px-6 py-3">เดินทาง</th>
                    <th scope="col" class="px-6 py-3">จัดการ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data in vehicleselect"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {{ data.name }}
                    </th>
                    <td class="px-6 py-4">{{ data.amountvehicle }}</td>
                    <td class="px-6 py-4">{{ data.date }}</td>
                    <td class="px-6 py-4">{{ data.vehicle_type }}</td>
                    <td class="flex px-6 py-4">
                      <p class="mr-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        แก้ไข
                      </p>
                      <p class="font-medium text-red-600 dark:text-red-500 hover:underline">
                        ลบ
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex justify-between">
            <NuxtLink to="/addhotel"
              class="mt-6 px-10 py-2.5 inline-flex text-sm font-medium text-center bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              <svg class="h-5 w-auto" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
              </svg>
              ย้อนกลับ
            </NuxtLink>
            <NuxtLink to="/tourdata" @click="addvehicle"
              class="ml- mt-6 px-10 py-2.5 inline-flex text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              บันทึก
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>

    <!-- addvechicle-->
    <div id="addvechicle" tabindex="-1" aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              เพิ่มพาหนะ
            </h3>
            <button type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-target="newaddvechicle" data-modal-hide="addvechicle">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <div class="grid-cols-3 gap-4 flex justify-between">
              <div>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                      viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <input type="text" id="table-search"
                    class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ค้นหาพาหนะ" />
                </div>
              </div>
              <button type="button" data-modal-toggle="newaddvechicle" data-modal-hide="addvechicle"
                class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                เพิ่มพาหนะ
              </button>
            </div>

            <!-- Table -->
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">พาหนะ</th>
                    <th scope="col" class="px-6 py-3">คอมเมนต์</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="data in vehicledata" @click="setid(data.vehicle_id)" id="updateProductButton"
                    data-modal-toggle="detailvechicle" data-modal-hide="addvechicle"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {{ data.name }}
                    </th>
                    <td v-if="data.comment" class="px-6 py-4">
                      {{ data.comment }}
                    </td>
                    <td v-else class="px-6 py-4">
                      ไม่มีคอมเมนต์
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button data-modal-hide="addvechicle" type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              ยกเลิก
            </button>
            <button data-modal-hide="addvechicle" type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- newaddvechicle-->
    <div id="newaddvechicle" tabindex="-1" aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <!-- Modal header -->
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              เพิ่มพาหนะ
            </h3>
            <button type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="newaddvechicle" data-modal-toggle="addvechicle">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">พาหนะ</label>
            <input type="email" id="email" v-model="namevehicle"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required />
          </div>
          <div v class="flex justify-end items-center space-x-4">
            <button @click="newvehicle" type="button" data-modal-hide="newaddvechicle" data-modal-toggle="addvechicle"
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- detailvechicle -->
    <div id="detailvechicle" tabindex="-1" aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-lg max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              ข้อมูลพาหนะ
            </h3>
            <button type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="detailvechicle" data-modal-toggle="addvechicle">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <form class="space-y-6" action="#">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวนพาหนะ</label>
                <input v-model="addvehicledata.amountvehicle" type="number" name="name" id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required />
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input name="start" type="text" v-model="addvehicledata.date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="วันเดินทาง">
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เดินทาง</label>
                <select v-model="addvehicledata.vehicle_type" id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="ขาไป">พาหนะขาไป</option>
                  <option value="ขากลับ">พาหนะขากลับ</option>
                  <option value="ขาไปและขากลับ">พาหนะขาไปและขากลับ</option>
                </select>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button @click="setvehicle" data-modal-hide="detailvechicle" type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              เพิ่ม
            </button>
            <button data-modal-hide="detailvechicle" data-modal-toggle="addvechicle" type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- editvechicle_page -->
    <!-- <div id="editvechicle_page" tabindex="-1" aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-lg max-h-full">
        Modal content
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          Modal header
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              ข้อมูลพาหนะ
            </h3>
            <button type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="editvechicle_page">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          Modal body
          <div class="p-6 space-y-6">
            <form class="space-y-6" action="#">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">พาหนะ</label>
                <input type="text" name="name" id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required />
              </div>
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวนพาหนะ</label>
                <input type="number" name="name" id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required />
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เดินทาง</label>
                <select v-model="addvehicledata.vehicle_type" id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="US">พาหนะขาไป</option>
                  <option value="CA">พาหนะขากลับ</option>
                  <option value="FR">พาหนะขาไปและขากลับ</option>
                </select>
              </div>
            </form>
          </div>
          Modal footer
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button data-modal-hide="editvechicle_page" type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              บันทึก
            </button>
            <button data-modal-hide="editvechicle_page" type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div> -->

  </section>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite/lib/esm/components";
import { storeToRefs } from "pinia";
import { useDatatour } from "../stores/tour";

const store = useDatatour();
const { vehicledata } = storeToRefs(store);
const vehicleselect: any = ref([]);
let setidvehicle = "";
let namevehicle = ref("");
const addvehicledata = ref({
  vehicle_type: "",
  date: "",
  amountvehicle: 0,
})

function setid(id: string) {
  setidvehicle = id;
  // console.log("IDhotel", setidhotel);
}

function setvehicle() {
  const datafil = computed(() => vehicledata.value.find(item => item.vehicle_id == setidvehicle));
  vehicleselect.value.push({ vehicle_id: setidvehicle, name: datafil.value.name, vehicle_type: addvehicledata.value.vehicle_type, date: addvehicledata.value.date, amountvehicle: addvehicledata.value.amountvehicle })
}

function newvehicle() {
  store.newvehicle({ vehicle_id: new Date().getTime(), name: namevehicle.value, comment: "" })
}

function addvehicle() {
  console.log("VehicleSelect", vehicleselect.value);
  store.addvehicle(vehicleselect);
}

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
