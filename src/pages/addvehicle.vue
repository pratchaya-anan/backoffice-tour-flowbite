<template>
  <!-- ข้อมูลโรงแรมที่พัก -->
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5 min-h-175">
    <div class="max-w-screen-lg mx-auto">
      <div
        class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow"
      >
        <ol
          class="flex justify-center items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0"
        >
          <li
            class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          >
            <span
              class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
            >
              1
            </span>
            <span>
              <h3 class="font-medium leading-tight">ข้อมูลทัวร์</h3>
            </span>
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 sm:ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </li>
          <li
            class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          >
            <span
              class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
            >
              2
            </span>
            <span>
              <h3 class="font-medium leading-tight">ข้อมูลไกด์</h3>
            </span>
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 sm:ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </li>
          <li
            class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          >
            <span
              class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
            >
              3
            </span>
            <span>
              <h3 class="font-medium leading-tight">ข้อมูลโรงแรม</h3>
            </span>
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 sm:ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </li>
          <li
            class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5"
          >
            <span
              class="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded-full shrink-0 dark:border-blue-500"
            >
              4
            </span>
            <span>
              <h3 class="font-medium leading-tight">ข้อมูลพาหนะ</h3>
            </span>
          </li>
        </ol>
      </div>
      <div
        class="mt-3 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow"
      >
        <h5
          class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          ข้อมูลพาหนะ
        </h5>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
        <form>
          <div class="grid gap-4 mb-4 grid-cols-2">
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >พาหนะ</label
              >
              <input
                type="text"
                id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >จำนวนพาหนะ</label
              >
              <input
                type="number"
                id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="grid gap-4 mb-4 grid-cols-4 mt-5">
            <div class="col-span-2">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >เดินทาง</label
              >
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="พาหนะขาไป">พาหนะขาไป</option>
                <option value="พาหนะขากลับ">พาหนะขากลับ</option>
                <option value="พาหนะขากลับ">ขาไปและขากลับ</option>
              </select>
            </div>

            <div class="col-start-4 flex justify-end">
              <button
                type="button"
                class="flex justify-center ml-3 mt-6 h-10 w-min-45 px-2 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>
                เพิ่มพาหนะ
              </button>
            </div>
          </div>
          <div class="mt-3">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3">พาหนะ</th>
                    <th scope="col" class="px-6 py-3">จำนวนพาหนะ</th>
                    <th scope="col" class="px-6 py-3">เดินทาง</th>
                    <th scope="col" class="px-6 py-3">แก้ไข</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      จำปา
                    </th>
                    <td class="px-6 py-4">3</td>
                    <td class="px-6 py-4">12/05/23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex justify-between">
            <NuxtLink
              to="/addhotel"
              class="mt-6 px-10 py-2.5 inline-flex text-sm font-medium text-center bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                class="h-5 w-auto"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                ></path>
              </svg>
              ย้อนกลับ
            </NuxtLink>
            <NuxtLink
              to="/tourdata"
              class="ml-3 mt-6 px-18 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              บันทึก
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
