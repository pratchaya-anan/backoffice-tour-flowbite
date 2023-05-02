<template>
  <section class="h-min-175 bg-gray-100 dark:bg-gray-900">
    <div class="mx-auto max-w-screen-2xl px-4 lg:px-12 p-6">
      <!-- Start coding here -->
      <h5 class="text-3xl font-bold text-gray-900 dark:text-white ml-2">
        รายการทัวร์
      </h5>
      <div class="flex justify-between mt-3">
        <div class="flex">
          <button id="dropdown-button" data-dropdown-toggle="dropdown"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button">
            สถานะ
            <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <div id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
              <li>
                <button type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  ทั้งหมด
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  รอคน
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  พร้อม
                </button>
              </li>
              <li>
                <button type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  เสร็จ
                </button>
              </li>
            </ul>
          </div>
          <div class="relative">
            <input type="search" id="search-dropdown"
              class="block p-3 w-95 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="ค้นหา ทัวร์, วันที่, ชื่อทัวร์" required />
          </div>

          <div class="flex">
            <div class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-gray-800">
              กำลังรอ
              <p
                class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                2
              </p>
            </div>

            <div class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-gray-800">
              พร้อม
              <p
                class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                2
              </p>
            </div>

            <div class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-gray-800">
              จบทริป
              <p
                class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                2
              </p>
            </div>
          </div>
        </div>

        <NuxtLink to="/addtour" type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-1">
          สร้างทัวร์
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
        <a href="/tourdata" v-for="(data, indexd) in tourdata" :key="indexd" @click="setid(data.idtour)"
          class="grid grid-cols-2 md:grid-cols-2 gap-1 block max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <span v-if="data.state == 1"
              class="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">กำลังรอ</span>
            <span v-if="data.state == 2"
              class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">พร้อม</span>
            <span v-if="data.state == 3"
              class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">จบทริป</span>
          </div>
          <div class="flex mt-0.5 ml-40">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z">
              </path>
            </svg>
            {{ data.member }}/10
          </div>
          <div>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ data.tourname }}
            </h5>
          </div>
          <div></div>
          <div>{{ data.date_start }}</div>
          <div>{{ data.gowith }}</div>
          <div>{{ data.date_end }}</div>
          <div>{{ data.backwith }}</div>
          <div>{{ data.day }} วัน {{ data.night }} คืน</div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lg="ts">
import { usetourData } from "/stores/mickeytest";

const store = usetourData();
const tourdata = store.tourdata;

function setid(id) {
  store.setidtour(id);
}

console.log("use" + tourdata);
</script>
