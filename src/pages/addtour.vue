<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div class="max-w-screen-xl mx-auto">
      <!-- ข้อมูลทัวร์ -->
      <div
        class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow"
      >
        <h5
          class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          ข้อมูลทัวร์
        </h5>

        <form>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ชื่อทริปทัวร์</label
              >
              <input
                type="text"
                id="small-input"
                class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                id="small-input"
                class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ชื่อไกด์</label
              >
              <input
                type="text"
                id="small-input"
                class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="grid gap-4 mb-4 grid-cols-4">
              <div class="col-span-3">
                <label
                  for="small-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >เบอร์โทร</label
                >
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button
                type="button"
                class="mt-7 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                เพิ่มไกล์
              </button>
            </div>
          </div>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">ชื่อไกด์</th>
                  <th scope="col" class="px-6 py-3">เบอร์โทร</th>
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
                    ปลาดาว แสงจันทร์
                  </th>
                  <td class="px-6 py-4">092-XXXXXXX</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="grid gap-4 mb-4 sm:grid-cols-4 mt-4">
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >จำนวนวัน</label
              >
              <input
                type="number"
                id="small-input"
                class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >จำนวนคืน</label
              >
              <input
                type="number"
                id="small-input"
                class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div date-rangepicker class="flex items-center col-span-2 mt-6">
              <div class="relative w-full">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                <input
                  name="start"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="วันเริ่มต้น"
                />
              </div>
              <span class="mx-4 text-gray-500">to</span>
              <div class="relative w-full">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                <input
                  name="end"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="วันสิ้นสุด"
                />
              </div>
            </div>
          </div>
          <div class="grid gap-4 mb-4 sm:grid-cols-4">
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >พาหนะอื่นๆ ขาไป</label
              >
              <input
                type="text"
                id="small-input"
                class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >พาหนะ ขากลับ</label
              >
              <input
                type="text"
                id="small-input"
                class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ราคาต่อหน่วย</label
              >
              <input
                type="number"
                id="small-input"
                class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ภาษี (0% 7% 9%)</label
              >
              <select
                id="category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option select="">0%</option>
                <option value="TV">7%</option>
                <option value="PC">9%</option>
              </select>
            </div>
          </div>
          <button
            type="button"
            class="w-full px-3 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            สร้างทัวร์
          </button>
        </form>
      </div>

      <!-- ข้อมูลโรงแรมที่พัก -->
      <div class="max-w-screen-xl mx-auto m-6">
        <div
          class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow"
        >
          <h5
            class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            ข้อมูลโรงแรมที่พัก
          </h5>

          <form>
            <div class="grid gap-4 mb-4 sm:grid-cols-4">
              <div class="col-span-4">
                <label
                  for="small-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ชื่อโรงแรม</label
                >
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="col-span-2">
                <label
                  for="small-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ชื่อทริปทัวร์</label
                >
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div date-rangepicker class="flex items-center col-span-2 mt-7">
                <div class="relative w-full">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                  <input
                    name="start"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="วันเริ่มต้น"
                  />
                </div>
                <span class="mx-4 text-gray-500">to</span>
                <div class="relative w-full">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                  <input
                    name="end"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="วันสิ้นสุด"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="w-full px-3 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                เพิ่มโรงแรม
              </button>
            </div>
            <div class="mt-3">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table
                  class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                  <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
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
          </form>
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            class="mt-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            บันทึกข้อมูล
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
