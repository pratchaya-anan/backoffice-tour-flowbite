<template>
  <!-- ข้อมูลโรงแรมที่พัก -->
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div class="max-w-screen-lg mx-auto">
      <div
        class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow"
      >
        <h5
          class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          สร้างทัวร์
        </h5>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
        <h1
          class="mb-3 text-2xl tracking-tight text-gray-900 dark:text-white mt-5"
        >
          ข้อมูลที่พัก
        </h1>

        <form>
          <div class="grid gap-4 mb-4 grid-cols-2">
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ชื่อโรงแรม</label
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
                >ชื่อทริปทัวร์</label
              >
              <input
                type="text"
                id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="grid gap-4 mb-4 grid-cols-5 mt-5">
            <div class="col-span-4">
              <div date-rangepicker class="flex items-center col-span-2">
                <div class="relative w-full">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="mt-7 w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >วันเริ่มต้น</label
                  >
                  <input
                    name="start"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="วันเริ่มต้น"
                  />
                </div>
                <span class="mx-4 text-gray-500 mt-7">to</span>
                <div class="relative w-full">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="mt-7 w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >วันสิ้นสุด</label
                  >
                  <input
                    name="end"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="วันสิ้นสุด"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                class="w-full mt-7 px-3 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                เพิ่มโรงแรม
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
                    <th scope="col" class="px-6 py-3">ชื่อโรงแรม</th>
                    <th scope="col" class="px-6 py-3">จำนวนห้องพัก</th>
                    <th scope="col" class="px-6 py-3">วันเช็คอิน</th>
                    <th scope="col" class="px-6 py-3">วันเช็คเอ้าท์</th>
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
                    <td class="px-6 py-4">15/05/23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex justify-end">
            <NuxtLink
              href="/tourdata"
              class="mt-3 px-18 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              สร้างทัวร์
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
