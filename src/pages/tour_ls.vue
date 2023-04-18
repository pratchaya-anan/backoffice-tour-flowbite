<template>
  <section class="bg-gray-100 dark:bg-gray-900">
    <div class="mx-auto max-w-screen-2xl px-4 lg:px-12 p-6">
      <!-- Start coding here -->
      <div class="flex justify-between">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="py-2.5 block w-100 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ค้นหาทัวร์, วันที่, ชื่อทัวร์"
              required
            />
          </div>
        </form>
        <NuxtLink to="/addtour">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-1"
          >
            สร้างทัวร์
          </button>
        </NuxtLink>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400"
          >
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
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <NuxtLink to="tourdata">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  เที่ยวเกาะ เลาะรัก
                </th>
              </NuxtLink>
              <td class="px-6 py-4">เกาะเสม็ด เสร็จทุกราย</td>
              <td class="px-6 py-4">16/04/2566</td>
              <td class="px-6 py-4">20/04/2566</td>
              <td class="px-6 py-4">5</td>
              <td class="px-6 py-4">4</td>
              <td class="px-6 py-4">นครชัยแอร์</td>
              <td class="px-6 py-4">AirAsia</td>
              <td class="px-6 py-4">1</td>
            </tr>

            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <NuxtLink to="tourdata">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  เที่ยวเกาะ เลาะรัก
                </th>
              </NuxtLink>
              <td class="px-6 py-4">เกาะเสม็ด เสร็จทุกราย</td>
              <td class="px-6 py-4">16/04/2566</td>
              <td class="px-6 py-4">20/04/2566</td>
              <td class="px-6 py-4">5</td>
              <td class="px-6 py-4">4</td>
              <td class="px-6 py-4">นครชัยแอร์</td>
              <td class="px-6 py-4">AirAsia</td>
              <td class="px-6 py-4">1</td>
            </tr>
            <tr
              class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <NuxtLink to="tourdata">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  เที่ยวเกาะ เลาะรัก
                </th>
              </NuxtLink>
              <td class="px-6 py-4">เกาะเสม็ด เสร็จทุกราย</td>
              <td class="px-6 py-4">16/04/2566</td>
              <td class="px-6 py-4">20/04/2566</td>
              <td class="px-6 py-4">5</td>
              <td class="px-6 py-4">4</td>
              <td class="px-6 py-4">นครชัยแอร์</td>
              <td class="px-6 py-4">AirAsia</td>
              <td class="px-6 py-4">1</td>
            </tr>
            <tr
              class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <NuxtLink to="tourdata">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  เที่ยวเกาะ เลาะรัก
                </th>
              </NuxtLink>
              <td class="px-6 py-4">เกาะเสม็ด เสร็จทุกราย</td>
              <td class="px-6 py-4">16/04/2566</td>
              <td class="px-6 py-4">20/04/2566</td>
              <td class="px-6 py-4">5</td>
              <td class="px-6 py-4">4</td>
              <td class="px-6 py-4">นครชัยแอร์</td>
              <td class="px-6 py-4">AirAsia</td>
              <td class="px-6 py-4">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
