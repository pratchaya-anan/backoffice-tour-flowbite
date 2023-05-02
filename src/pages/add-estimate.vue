<template>
  <section class="p-3 sm:p-5">
    <div class="mx-auto max-w-screen-lg">
      <form>
        <div
          class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <h5 class="text-3xl font-bold text-gray-900 dark:text-white">
            แบบฟอร์มประมาณการเบิกเงินสดย่อย | ...
          </h5>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <p class="text-gray-900 dark:text-white">เลขที่ใบเบิก: 125544783</p>
          <div class="grid grid-cols-2 gap-4 mt-2">
            <div>
              <div class="mb-4">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ชื่อผู้ขอเบิก</label
                >
                <input
                  type="text"
                  id="base-input"
                  v-model="addEstimate.name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <div class="mb-4">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >แผนก</label
                >
                <input
                  type="text"
                  id="base-input"
                  v-model="addEstimate.department"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >วันที่ต้องการใช้เงิน</label
              >
              <div class="relative">
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
                  datepicker
                  datepicker-autohide
                  type="text"
                  v-model="addEstimate.date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เลือกวันที่"
                />
              </div>
            </div>
            <div>
              <div class="mb-6">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >วัตถุประสงค์การยืมเงินทดลองจ่าย</label
                >
                <input
                  type="text"
                  id="base-input"
                  v-model="addEstimate.objectives"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-3 w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <h5 class="mb-2 text-2xl text-gray-900 dark:text-white">
            รายละเอียด
          </h5>
          <div class="grid grid-cols-3 gap-4">
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ประเภทค่าใช้จ่าย</label
              >
              <select
                id="countries"
                v-model="dataDetail.type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>เลือกประเภท</option>
                <option value="allowance">เบี้ยเลี้ยง</option>
                <option value="accommodation">ค่าที่พัก</option>
                <option value="vehicle_fee">ค่ายานพาหนะ</option>
                <option value="fuel_cost">ค่าน้ำมัน</option>
                <option value="insurance">ค่าประกัน</option>
                <option value="guide_fee">ค่าไกด์</option>
                <option value="staff_fee">ค่า staff</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>
            <div>
              <div class="mb-6">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ราคา</label
                >
                <input
                  type="number"
                  id="base-input"
                  v-model="dataDetail.price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <div class="mb-6">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >จำนวน</label
                >
                <input
                  type="number"
                  id="base-input"
                  v-model="dataDetail.quantity"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-4">
            <div class="mb-6 col-span-4">
              <label
                for="base-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >รายละเอียดค่าใช้จ่าย</label
              >
              <input
                type="text"
                id="base-input"
                v-model="dataDetail.detail"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" "
              />
            </div>
            <div class="mt-7">
              <button
                type="button"
                @click="addDataDetail"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
              >
                เพิ่มรายการ
              </button>
            </div>
          </div>

          <div class="relative overflow-x-auto mt-4 rounded-lg">
            <table
              class="w-full text-sm text-gray-500 dark:text-gray-400 text-center"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-2 py-3">ลำดับ</th>
                  <th scope="col" class="px-10 py-3">ประเภทค่าใช้จ่าย</th>
                  <th scope="col" class="px-6 py-3">รายละเอียดค่าใช้จ่าย</th>
                  <th scope="col" class="px-3 py-3">ราคา</th>
                  <th scope="col" class="px-6 py-3">จำนวน</th>
                  <th scope="col" class="px-6 py-3">ยอดสุทธิ</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  v-for="(data, index) in addEstimate.details"
                  key="index"
                >
                  <th
                    scope="row"
                    class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ index + 1 }}
                  </th>
                  <td class="px-10 py-4">{{ data.type }}</td>
                  <td class="px-6 py-4">{{ data.detail }}</td>
                  <td class="px-3 py-4">{{ data.price }}</td>
                  <td class="px-6 py-4">{{ data.quantity }}</td>
                  <td class="px-6 py-4">{{ data.price * data.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex justify-end">
            <button
              type="button"
              @click="addDataEstimate"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2"
            >
              สร้างใบประมาณการ
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lg="ts">
import { estimate } from "/stores/estimate";

const store = estimate();
const addEstimate = ref({
  name: "",
  department: "",
  date: "",
  objectives: "",
  details: [],
});

const dataDetail = {
  type: "",
  price: 0,
  quantity: 0,
  detail: "",
};

function addDataDetail() {
  addEstimate.value.details.push({
    type: dataDetail.type,
    price: dataDetail.price,
    quantity: dataDetail.quantity,
    detail: dataDetail.detail,
  });
  console.log(addEstimate.value);
}

function addDataEstimate() {
  store.additem(addEstimate.value);
  // addEstimate.value.push({ name: addEstimate.name, department: addEstimate.department, objectives: addEstimate.objectives });
  console.log(addEstimate.value);
}

// function add() {
//   store.additem(addEstimate.value)
//   console.log(addEstimate.value);
// }
</script>

<!-- <script lang="ts">
if (process.client) {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
</script> -->
