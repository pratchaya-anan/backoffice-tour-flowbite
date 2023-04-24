<template>
  <div class="mx-auto max-w-screen-xl">
    <section class="">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <div>
          <h1
            class="my-2 mx-6 text-4xl font-bold text-gray-900 dark:text-white"
          >
            รายงาน
          </h1>
        </div>
        <table class="w-full text-sm text-left dark:text-gray-400">
          <caption
            class="p-4 text-base text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
          >
            <div class="grid grid-cols-2 gap-30">
              <div>
                <form>
                  <div class="flex">
                    <label
                      for="search-dropdown"
                      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >Your Email</label
                    >
                    <button
                      id="dropdown-button"
                      data-dropdown-toggle="dropdown"
                      class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                      type="button"
                    >
                      25/เมษายน/2566
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="dropdown"
                      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            วัน
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            เดือน
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            ปี
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            รายเดือน(แบบละเอียด)
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="relative w-full">
                      <input
                        type="search"
                        id="search-dropdown"
                        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="กำหนด วัน เดือน ปี"
                        required
                      />
                      <button
                        type="submit"
                        class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5"
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
                        <span class="sr-only">Search</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="flex justify-around p-2">
                <div class="flex">
                  <div class="border-r-1 pr-2">
                    รายรับ
                    <sheet class="px-2 py-1 text-white bg-green-700 rounded-sm"
                      >897,548</sheet
                    >
                  </div>
                  <div class="px-2">
                    รายจ่าย
                    <sheet class="px-2 py-1 text-white bg-red-700 rounded-sm"
                      >245,784</sheet
                    >
                  </div>
                </div>
                <div class="">
                  กำไร/ขาดทุน
                  <sheet
                    class="px-2 py-1 bg-gray-100 ring-gray-200 text-blue-700 border border-gray-200 rounded-sm"
                    >148,420</sheet
                  >
                </div>
              </div>
            </div>
          </caption>
          <thead
            class="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">ลำดับ</th>
              <th scope="col" class="px-6 py-3">รายการ</th>
              <th scope="col" class="px-6 py-3">รายรับ (บาท)</th>
              <th scope="col" class="px-6 py-3">รายจ่าย (บาท)</th>
              <th scope="col" class="px-6 py-3">หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td
                scope="row"
                class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </td>
              <td class="px-6 py-4">ค่าใช้จ่ายภายในทริป อบต โพนงาม</td>
              <td class="px-6 py-4">
                <sheet class="px-2 py-1 text-white bg-green-700 rounded-sm"
                  >897,548</sheet
                >
              </td>
              <td class="px-6 py-4">-</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td
                scope="row"
                class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </td>
              <td class="px-6 py-4">เที่ยวเกาะ เลาะรัก</td>
              <td class="px-6 py-4">-</td>
              <td class="px-6 py-4">
                <sheet class="px-2 py-1 text-white bg-red-700 rounded-sm"
                  >245,784</sheet
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
