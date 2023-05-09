<template>
  <section class="dark:bg-gray-900 p-3 sm:p-5 min-h-175">
    <div class="max-w-screen-lg mx-auto">
      <!-- ข้อมูลทัวร์ -->
      <ol class="flex justify-end items-center w-full space-y-4">
        <!-- Step 1 -->
        
        <NuxtLink to="/edittour" class="pt-4">
          <div type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-l-lg ">
            <li class="flex items-center dark:text-blue-500 space-x-2.5">
              <svg fill="none" class="w-6 h-6 ml-2" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10">
                </path>
              </svg>
              <span>
                <h3 class="font-medium leading-tight">ข้อมูลทัวร์</h3>
              </span>
            </li>
          </div>
        </NuxtLink>
        <!-- Step 2 -->
        <NuxtLink to="/editguide">
          <div type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
              <svg fill="none" class="w-6 h-6 ml-2" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10">
                </path>
              </svg>
              <span>
                <h3 class="font-medium leading-tight">ข้อมูลไกด์</h3>
              </span>
              
            </li>
          </div>
        </NuxtLink>
        <!-- Step 3 -->
        <NuxtLink to="/edithotel">
          <div type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
              <svg fill="none" class="w-6 h-6 ml-2" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10">
                </path>
              </svg>
              <span>
                <h3 class="font-medium leading-tight">ข้อมูลโรงแรม</h3>
              </span>
            </li>
          </div>
        </NuxtLink>        
        <!-- Step 4 -->
        <NuxtLink to="/editvehicle">
          <button type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
              <svg fill="none" class="w-6 h-6 ml-2" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10">
                </path>
              </svg>
              <span>
                <h3 class="font-medium leading-tight">ข้อมูลพาหนะ</h3>
              </span>
            </li>
          </button>
        </NuxtLink>
      </ol>
      <div class="mt-3 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          ข้อมูลทัวร์
        </h5>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />

        <form>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <div class="mb-2">
                <label for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อทริปทัวร์</label>
                <input type="text" id="default-input" v-model="tourdata.tourname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
            </div>
            <div>
              <div class="mb-2">
                <label for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อโปรแกรมทัวร์</label>
                <input type="text" id="default-input" v-model="tourdata.programname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
            </div>
            <div>
              <label for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวนวัน</label>
              <input type="number" id="default-input" v-model="tourdata.day"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวนคืน</label>
              <input type="number" id="default-input" v-model="tourdata.night"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันเริ่มต้น</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input datepicker type="text" v-model="tourdata.datestart"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เลือกวัน" />
              </div>
            </div>
            <div>
              <label for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันสิ้นสุด</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>

                <input datepicker type="text" v-model="tourdata.dateend"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เลือกวัน" />
              </div>
            </div>
            <div>
              <label for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคาต่อหน่วย</label>
              <input type="number" id="small-input" v-model="tourdata.priceunit"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษี (0% 7%
                9%)</label>
              <select id="category" v-model="tourdata.tax"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option select="0">0%</option>
                <option value="7">7%</option>
                <option value="9">9%</option>
              </select>
            </div>
          </div>

          <div class="grid gap-4 mb-4 sm:grid-cols-2"></div>

          <div @click="sendtour" class="flex justify-end">
            <NuxtLink to="/tourdata"
              class="mt-3 mr-3 px-8 py-2.5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 inline-flex">
              กลับไปหน้าทัวร์
            </NuxtLink>
            <NuxtLink to=""
              class="mt-3 px-10 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-flex">
              บันทึก
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDatatour } from '../stores/tour'

const store = useDatatour();

const tourdata = {
  tourid: new Date().getTime(),
  tourname: '',
  programname: '',
  day: 0,
  night: 0,
  datestart: '',
  dateend: '',
  go: '',
  back: '',
  priceunit: 0,
  vat: 0,
  summember: 0,
  state: 1,
  member: [],
  guide: [],
  hotel: [],
  vehicle: [],
}

function sendtour() {
  store.addtour(tourdata);
}

</script>