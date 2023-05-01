<template>
  <section class="h-min-160 bg-gray-100 dark:bg-gray-900">
    <div class="mx-auto max-w-screen-2xl px-4 lg:px-12 p-6">
      <!-- Start coding here -->
      <div class="flex justify-between">
        <form>
          <label for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input type="search" id="default-search"
              class="py-2.5 block w-100 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ค้นหาทัวร์, วันที่, ชื่อทัวร์" required />
          </div>
        </form>
        <NuxtLink to="/addtour">
          <button type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-1">
            สร้างทัวร์
          </button>
        </NuxtLink>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">ชื่อทริปทัวร์</th>
              <th scope="col" class="px-6 py-3">ชื่อโปรแกรมทัวร์</th>
              <th scope="col" class="px-6 py-3">วันที่เริ่มทริป</th>
              <th scope="col" class="px-6 py-3">วันที่สิ้นสุดทริป</th>
              <th scope="col" class="px-6 py-3">วัน</th>
              <th scope="col" class="px-6 py-3">คืน</th>
              <th scope="col" class="px-6 py-3">เที่ยวบินหรือพาหนะอื่นขาไป</th>
              <th scope="col" class="px-6 py-3">
                เที่ยวบินหรือพาหนะอื่นขากลับ
              </th>
              <th scope="col" class="px-6 py-3">จำนวนลูกทัวร์</th>
              <th scope="col" class="px-6 py-3">สถานะ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in datatour" :key="index" @click="setid(data.tourid)"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="font-bold px-6 py-4">
                {{ data.tourname }}
              </td>
              <td class="px-6 py-4">
                {{ data.programname }}
              </td>
              <td class="px-6 py-4">
                {{ data.datestart }}
              </td>
              <td class="px-6 py-4">
                {{ data.dateend }}
              </td>
              <td class="px-6 py-4">
                {{ data.day }}
              </td>
              <td class="px-6 py-4">
                {{ data.night }}
              </td>
              <td class="px-6 py-4">
                {{ data.go }}
              </td>
              <td class="px-6 py-4">
                {{ data.back }}
              </td>
              <td class="px-6 py-4">
                {{ data.summember }}
              </td>
              <td class="flex justify-center px-6 py-4">
                <span v-if="data.state == t1"
                  class="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">กำลังรอ</span>
                <span v-if="data.state == t2"
                  class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">พร้อม</span>
                <span v-if="data.state == t3"
                  class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">เสร็จสิ้น</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup lg="ts">
  import { storeToRefs } from 'pinia';
  import { useDatatour } from '/stores/tour'

const store = useDatatour();
const { datatour } = storeToRefs(store);

  function setid(id) {
    store.settourid(id);
    useRouter().push('/tourdata');
  }

</script>